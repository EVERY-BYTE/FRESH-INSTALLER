"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserCoin = exports.updateUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const user_1 = require("../../models/user");
const updateUser = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['userId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await user_1.UserModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userId: { [sequelize_1.Op.eq]: requestBody.userId }
            }
        });
        if (result == null) {
            const message = 'user not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody?.userName?.length > 0 && {
                userName: requestBody?.userName
            }),
            ...(requestBody?.userEmail?.length > 0 && {
                userEmail: requestBody?.userEmail
            }),
            ...(requestBody?.userPassword?.length > 0 && {
                userPassword: requestBody?.userPassword
            }),
            ...(requestBody?.userWhatsAppNumber?.length > 0 && {
                userWhatsAppNumber: requestBody?.userWhatsAppNumber
            }),
            ...(requestBody?.userWhatsAppNumberVerified && {
                userWhatsAppNumberVerified: requestBody?.userWhatsAppNumberVerified
            }),
            ...(requestBody?.userPhoto?.length > 0 && {
                userPhoto: requestBody?.userPhoto
            }),
            ...(requestBody?.userCoin > 0 && {
                userCoin: requestBody?.userCoin
            }),
            ...(requestBody?.userRole?.length > 0 && {
                userRole: requestBody?.userRole
            })
        };
        await user_1.UserModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userId: { [sequelize_1.Op.eq]: requestBody.userId }
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
exports.updateUser = updateUser;
const updateUserCoin = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['userId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const user = await user_1.UserModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                userId: { [sequelize_1.Op.eq]: requestBody.userId }
            }
        });
        if (user == null) {
            const message = 'user not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        if (requestBody?.userCoin > 0) {
            user.userCoin += requestBody.userCoin;
        }
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
exports.updateUserCoin = updateUserCoin;
