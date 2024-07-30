"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMyAddress = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestCheker_1 = require("../../utilities/requestCheker");
const uuid_1 = require("uuid");
const myAddress_1 = require("../../models/myAddress");
const sequelize_1 = require("sequelize");
const createMyAddress = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: [
            'myAddressName',
            'myAddressKontak',
            'myAddressDetail',
            'myAddressPostalCode',
            'myAddressProvinsi',
            'myAddressKabupaten',
            'myAddressKecamatan'
        ],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const myAddress = await myAddress_1.MyAddressesModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        if (myAddress != null) {
            void myAddress.destroy();
        }
        requestBody.myAddressId = (0, uuid_1.v4)();
        await myAddress_1.MyAddressesModel.create(requestBody);
        const response = response_1.ResponseData.default;
        const result = { message: 'success' };
        response.data = result;
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.createMyAddress = createMyAddress;
