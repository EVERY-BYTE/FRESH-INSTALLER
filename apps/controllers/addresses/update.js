"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddress = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const address_1 = require("../../models/address");
const updateAddress = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['addressId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await address_1.AddressesModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                addressId: { [sequelize_1.Op.eq]: requestBody.addressId }
            }
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody.addressUserName.length > 0 && {
                addressUserName: requestBody.addressUserName
            }),
            ...(requestBody.addressKontak.length > 0 && {
                addressKontak: requestBody.addressKontak
            }),
            ...(requestBody.addressDetail.length > 0 && {
                addressDetail: requestBody.addressDetail
            }),
            ...(requestBody.addressPostalCode.length > 0 && {
                addressPostalCode: requestBody.addressPostalCode
            }),
            ...(requestBody.addressProvinsi.length > 0 && {
                addressProvinsi: requestBody.addressProvinsi
            }),
            ...(requestBody.addressKabupaten.length > 0 && {
                addressKabupaten: requestBody.addressKabupaten
            }),
            ...(requestBody.addressKecamatan.length > 0 && {
                addressKecamatan: requestBody.addressKecamatan
            })
        };
        await address_1.AddressesModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                addressId: { [sequelize_1.Op.eq]: requestBody.addressId }
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
exports.updateAddress = updateAddress;
