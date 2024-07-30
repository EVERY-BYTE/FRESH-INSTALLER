"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDetailCategory = exports.findAllCategory = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const sequelize_1 = require("sequelize");
const pagination_1 = require("../../utilities/pagination");
const requestCheker_1 = require("../../utilities/requestCheker");
const log_1 = require("../../utilities/log");
const category3_1 = require("../../models/category3");
const category1_1 = require("../../models/category1");
const category2_1 = require("../../models/category2");
const findAllCategory = async (req, res) => {
    const requestQuery = req.query;
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['categoryId1', 'categoryId2'],
        requestData: requestQuery
    });
    if (emptyField.length > 0) {
        const message = `invalid request parameter! require (${emptyField})`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(response);
    }
    try {
        const page = new pagination_1.Pagination(parseInt(req.query.page) ?? 0, parseInt(req.query.size) ?? 10);
        const result = await category3_1.Category3Model.findAndCountAll({
            where: {
                deleted: { [sequelize_1.Op.eq]: 0 },
                categoryId1: { [sequelize_1.Op.eq]: requestQuery.categoryId1 },
                categoryId2: { [sequelize_1.Op.eq]: requestQuery.categoryId2 },
                ...(Boolean(req.query.search) && {
                    [sequelize_1.Op.or]: [{ categoryName: { [sequelize_1.Op.like]: `%${req.query.search}%` } }]
                })
            },
            include: [
                {
                    model: category1_1.Category1Model,
                    attributes: ['categoryName']
                },
                {
                    model: category2_1.Category2Model,
                    attributes: ['categoryName']
                }
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
exports.findAllCategory = findAllCategory;
const findDetailCategory = async (req, res) => {
    const requestQuery = req.query;
    console.log(requestQuery);
    const emptyField = (0, requestCheker_1.requestChecker)({
        requireList: ['categoryId1', 'categoryId2', 'categoryId3'],
        requestData: requestQuery
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
                categoryId1: { [sequelize_1.Op.eq]: requestQuery.categoryId1 },
                categoryId2: { [sequelize_1.Op.eq]: requestQuery.categoryId2 },
                categoryId3: { [sequelize_1.Op.eq]: requestQuery.categoryId3 }
            }
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
exports.findDetailCategory = findDetailCategory;
