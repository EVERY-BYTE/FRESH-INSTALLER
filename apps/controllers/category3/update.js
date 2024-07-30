"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const category3_1 = require("../../models/category3");
const updateCategory = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['categoryId1', 'categoryId2', 'categoryId3'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await category3_1.Category3Model.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                categoryId1: { [sequelize_1.Op.eq]: requestBody.categoryId1 },
                categoryId2: { [sequelize_1.Op.eq]: requestBody.categoryId2 },
                categoryId3: { [sequelize_1.Op.eq]: requestBody.categoryId3 }
            }
        });
        if (result == null) {
            const message = 'category not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody.categoryName.length > 0 && {
                categoryName: requestBody.categoryName
            })
        };
        await category3_1.Category3Model.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                categoryId1: { [sequelize_1.Op.eq]: requestBody.categoryId1 },
                categoryId2: { [sequelize_1.Op.eq]: requestBody.categoryId2 },
                categoryId3: { [sequelize_1.Op.eq]: requestBody.categoryId3 }
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
exports.updateCategory = updateCategory;
