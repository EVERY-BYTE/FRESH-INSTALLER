"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category1Routes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const category1_1 = require("../../controllers/category1");
const category1Routes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/category1', router);
    router.get('/', async (req, res) => await category1_1.category1Controller.findAll(req, res));
    router.get('/detail/:categoryId1', async (req, res) => await category1_1.category1Controller.findOne(req, res));
    router.post('/', middlewares_1.middleware.useAuthorization, async (req, res) => await category1_1.category1Controller.create(req, res));
    router.patch('/', middlewares_1.middleware.useAuthorization, async (req, res) => await category1_1.category1Controller.update(req, res));
    router.delete('/', middlewares_1.middleware.useAuthorization, async (req, res) => await category1_1.category1Controller.remove(req, res));
};
exports.category1Routes = category1Routes;
