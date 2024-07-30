"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const requestCheker_1 = require("../../utilities/requestCheker");
const products_1 = require("../../models/products");
const updateProduct = async (req, res) => {
    const requestBody = req.body;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['productId'],
        requestData: requestBody
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const result = await products_1.ProductModel.findOne({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                productId: { [sequelize_1.Op.eq]: requestBody.productId }
            }
        });
        if (result == null) {
            const message = 'not found!';
            const response = response_1.ResponseData.error(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
        }
        const newData = {
            ...(requestBody.productName.length > 0 && {
                productName: requestBody.productName
            }),
            ...(requestBody.productDescription.length > 0 && {
                productDescription: requestBody.productDescription
            }),
            ...(requestBody.productImages.length > 0 && {
                productImages: requestBody.productImages
            }),
            ...(requestBody.productPrice !== null && {
                productPrice: requestBody.productPrice
            }),
            ...(requestBody.productCategoryId1.length > 0 && {
                productCategoryId1: requestBody.productCategoryId1
            }),
            ...(requestBody.productCategoryId2.length > 0 && {
                productCategoryId2: requestBody.productCategoryId2
            }),
            ...(requestBody.productCategoryId3.length > 0 && {
                productCategoryId3: requestBody.productCategoryId3
            }),
            ...(requestBody.productCondition.length > 0 && {
                productCondition: requestBody.productCondition
            }),
            ...(requestBody.productColors.length > 0 && {
                productColors: requestBody.productColors
            }),
            ...(requestBody.productSizes.length > 0 && {
                productSizes: requestBody.productSizes
            })
        };
        await products_1.ProductModel.update(newData, {
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                productId: { [sequelize_1.Op.eq]: requestBody.productId }
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
exports.updateProduct = updateProduct;
