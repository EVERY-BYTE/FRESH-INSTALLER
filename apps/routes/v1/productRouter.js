"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const products_1 = require("../../controllers/products");
const middlewares_1 = require("../../middlewares");
const productRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/products', router);
    router.get('/', async (req, res) => await products_1.ProductController.findAll(req, res));
    router.get('/detail/:productId', async (req, res) => await products_1.ProductController.findOne(req, res));
    router.post('/', middlewares_1.middleware.useAuthorization, async (req, res) => await products_1.ProductController.create(req, res));
    router.patch('/', middlewares_1.middleware.useAuthorization, async (req, res) => await products_1.ProductController.update(req, res));
    router.delete('/', middlewares_1.middleware.useAuthorization, async (req, res) => await products_1.ProductController.remove(req, res));
};
exports.productRoutes = productRoutes;
