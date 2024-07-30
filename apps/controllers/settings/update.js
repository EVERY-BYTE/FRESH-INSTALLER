"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettings = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const settings_1 = require("../../models/settings");
const user_1 = require("../../models/user");
const updateSettings = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['settingId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const checkRole = await user_1.UserModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userId: req.body?.user?.userId,
                userRole: { [sequelize_1.Op.eq]: 'superAdmin' }
            }
        });
        if (checkRole == null) {
            const message = 'access denied!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const result = await settings_1.SettingsModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                settingId: { [sequelize_1.Op.eq]: requestBody.settingId }
            }
        });
        if (result == null) {
            const message = 'setting not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody.settingBanner.length > 0 && {
                settingBanner: requestBody.settingBanner
            }),
            ...(requestBody.settingWhatsappNumber.length > 0 && {
                settingWhatsappNumber: requestBody.settingWhatsappNumber
            })
        };
        await settings_1.SettingsModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                settingId: { [sequelize_1.Op.eq]: requestBody.settingId }
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
exports.updateSettings = updateSettings;
