"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrUpdateWaBlassSettings = void 0;
const http_status_codes_1 = require("http-status-codes");
const uuid_1 = require("uuid");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const waBlasSettings_1 = require("../../models/waBlasSettings");
const requestCheker_1 = require("../../utilities/requestCheker");
const createOrUpdateWaBlassSettings = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['waBlasSettingServer', 'waBlasSettingToken'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const checkWaBlassSettings = await waBlasSettings_1.WaBlasSettingModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        if (checkWaBlassSettings) {
            checkWaBlassSettings.waBlasSettingServer = requestBody.waBlasSettingServer;
            checkWaBlassSettings.waBlasSettingToken = requestBody.waBlasSettingToken;
            void checkWaBlassSettings.save();
        }
        else {
            requestBody.waBlasSettingId = (0, uuid_1.v4)();
            await waBlasSettings_1.WaBlasSettingModel.create(requestBody);
        }
        const response = response_1.ResponseData.default;
        response.data = { message: 'success' };
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (error) {
        console.log(error.message);
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.createOrUpdateWaBlassSettings = createOrUpdateWaBlassSettings;
