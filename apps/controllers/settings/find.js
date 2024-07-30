"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSettings = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const settings_1 = require("../../models/settings");
const findSettings = async (req, res) => {
    try {
        const result = await settings_1.SettingsModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        if (result == null) {
            const message = 'setting not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const response = response_1.ResponseData.default;
        response.data = result;
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findSettings = findSettings;
