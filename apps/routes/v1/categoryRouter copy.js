"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const categories_1 = require("../../controllers/categories");
const categoryRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/categories', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await categories_1.categoriesController.findAll(req, res));
    router.get('/detail/:categoryId', async (req, res) => await categories_1.categoriesController.findOne(req, res));
    router.post('/', async (req, res) => await categories_1.categoriesController.create(req, res));
    router.patch('/', async (req, res) => await categories_1.categoriesController.update(req, res));
    router.delete('/', async (req, res) => await categories_1.categoriesController.remove(req, res));
};
exports.categoryRoutes = categoryRoutes;
