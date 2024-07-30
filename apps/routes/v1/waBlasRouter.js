"use strict";
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waBlasRouter = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const waBlass_1 = require("../../controllers/waBlass");
const waBlasRouter = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/wa-blas', middlewares_1.middleware.useAuthorization, router);
    router.post('/send-message', (req, res) => waBlass_1.waBlasController.send(req, res));
    router.get('/history', (req, res) => waBlass_1.waBlasController.findAllHistory(req, res));
    router.get('/history/detail/:waBlasHistoryId', (req, res) => waBlass_1.waBlasController.findDetailHistory(req, res));
};
exports.waBlasRouter = waBlasRouter;
