"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const orders_1 = require("../../controllers/orders");
const orderRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/orders', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await orders_1.orderController.findAll(req, res));
    router.get('/detail/:orderId', async (req, res) => await orders_1.orderController.findOne(req, res));
    router.post('/', async (req, res) => await orders_1.orderController.create(req, res));
    router.patch('/', async (req, res) => await orders_1.orderController.update(req, res));
    router.delete('/', async (req, res) => await orders_1.orderController.remove(req, res));
};
exports.orderRoutes = orderRoutes;
