"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTwilioSettings = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const twilioSettings_1 = require("../../models/twilioSettings");
const findTwilioSettings = async (req, res) => {
    try {
        const waBlasSettings = await twilioSettings_1.TwilioSettingsModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 }
            }
        });
        const response = response_1.ResponseData.default;
        response.data = waBlasSettings;
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        console.log(error.message);
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findTwilioSettings = findTwilioSettings;
