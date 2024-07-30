"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const cart_1 = require("../../controllers/cart");
const cartRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/carts', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await cart_1.cartController.findAll(req, res));
    router.get('/detail/:cartId', async (req, res) => await cart_1.cartController.findOne(req, res));
    router.post('/', async (req, res) => await cart_1.cartController.create(req, res));
    router.patch('/', async (req, res) => await cart_1.cartController.update(req, res));
    router.delete('/', async (req, res) => await cart_1.cartController.remove(req, res));
};
exports.cartRoutes = cartRoutes;
