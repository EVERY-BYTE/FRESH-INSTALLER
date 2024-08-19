"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.category3Routes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const category3_1 = require("../../controllers/category3");
const category3Routes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/category3', router);
    router.get('/', async (req, res) => await category3_1.category3Controller.findAll(req, res));
    router.get('/detail/', async (req, res) => await category3_1.category3Controller.findOne(req, res));
    router.post('/', middlewares_1.middleware.useAuthorization, async (req, res) => await category3_1.category3Controller.create(req, res));
    router.patch('/', middlewares_1.middleware.useAuthorization, async (req, res) => await category3_1.category3Controller.update(req, res));
    router.delete('/', middlewares_1.middleware.useAuthorization, async (req, res) => await category3_1.category3Controller.remove(req, res));
};
exports.category3Routes = category3Routes;
