"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticRouters = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const statistic_1 = require("../../controllers/statistic");
const statisticRouters = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/statistic', middlewares_1.middleware.useAuthorization, router);
    router.get('/total', async (req, res) => await statistic_1.statisticController.findTotal(req, res));
};
exports.statisticRouters = statisticRouters;
