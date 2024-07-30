"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const transactions_1 = require("../../controllers/transactions");
const transactionRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/transactions', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await transactions_1.transactionController.findAll(req, res));
    router.get('/detail/:transactionId', async (req, res) => await transactions_1.transactionController.findOne(req, res));
    router.post('/', async (req, res) => await transactions_1.transactionController.create(req, res));
    router.patch('/', async (req, res) => await transactions_1.transactionController.update(req, res));
    router.delete('/', async (req, res) => await transactions_1.transactionController.remove(req, res));
};
exports.transactionRoutes = transactionRoutes;
