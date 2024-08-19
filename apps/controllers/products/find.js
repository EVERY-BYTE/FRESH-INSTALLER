"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDetailProduct = exports.findAllProducts = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const pagination_1 = require("../../utilities/pagination");
const requestCheker_1 = require("../../utilities/requestCheker");
const log_1 = require("../../utilities/log");
const products_1 = require("../../models/products");
const category1_1 = require("../../models/category1");
const category2_1 = require("../../models/category2");
const category3_1 = require("../../models/category3");
const findAllProducts = async (req, res) => {
    try {
        const page = new pagination_1.Pagination(parseInt(req.query.page) ?? 0, parseInt(req.query.size) ?? 10);
        const result = await products_1.ProductModel.findAndCountAll({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                ...(Boolean(req.query.search) && {
                    [sequelize_1.Op.or]: [{ productName: { [sequelize_1.Op.like]: `%${req.query.search}%` } }]
                }),
                ...(Boolean(req.query.productCategoryId1) && {
                    productCategoryId1: { [sequelize_1.Op.eq]: req.query.productCategoryId1 }
                }),
                ...(Boolean(req.query.productCategoryId2) && {
                    productCategoryId2: { [sequelize_1.Op.eq]: req.query.productCategoryId2 }
                }),
                ...(Boolean(req.query.productCategoryId3) && {
                    productCategoryId3: { [sequelize_1.Op.eq]: req.query.productCategoryId3 }
                })
            },
            include: [
                { model: category1_1.Category1Model },
                { model: category2_1.Category2Model },
                { model: category3_1.Category3Model }
            ],
            order: [['id', 'desc']],
            ...(req.query.pagination === 'true' && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.default;
        response.data = page.data(result);
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (error) {
        log_1.CONSOLE.error(error.message);
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.findAllProducts = findAllProducts;
const findDetailProduct = async (req, res) => {
    const requestParams = req.params;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['productId'],
        requestData: requestParams
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
                productId: { [sequelize_1.Op.eq]: requestParams.productId }
            },
            include: [
                { model: category1_1.Category1Model },
                { model: category2_1.Category2Model },
                { model: category3_1.Category3Model }
            ]
        });
        if (result == null) {
            const message = 'not found!';
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
exports.findDetailProduct = findDetailProduct;
