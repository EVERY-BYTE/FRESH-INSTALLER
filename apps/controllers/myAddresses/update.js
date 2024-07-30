"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMyAddress = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const myAddress_1 = require("../../models/myAddress");
const updateMyAddress = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['myAddressId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await myAddress_1.MyAddressesModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                myAddressId: { [sequelize_1.Op.eq]: requestBody.myAddressId }
            }
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody.myAddressName.length > 0 && {
                myAddressName: requestBody.myAddressName
            }),
            ...(requestBody.myAddressKontak.length > 0 && {
                myAddressKontak: requestBody.myAddressKontak
            }),
            ...(requestBody.myAddressDetail.length > 0 && {
                myAddressDetail: requestBody.myAddressDetail
            }),
            ...(requestBody.myAddressPostalCode.length > 0 && {
                myAddressPostalCode: requestBody.myAddressPostalCode
            }),
            ...(requestBody.myAddressProvinsi.length > 0 && {
                myAddressProvinsi: requestBody.myAddressProvinsi
            }),
            ...(requestBody.myAddressKabupaten.length > 0 && {
                myAddressKabupaten: requestBody.myAddressKabupaten
            }),
            ...(requestBody.myAddressKecamatan.length > 0 && {
                myAddressKecamatan: requestBody.myAddressKecamatan
            })
        };
        await myAddress_1.MyAddressesModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                myAddressId: { [sequelize_1.Op.eq]: requestBody.myAddressId }
            }
        });
        const response = response_1.ResponseData.default;
        response.data = { message: 'success' };
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.updateMyAddress = updateMyAddress;
