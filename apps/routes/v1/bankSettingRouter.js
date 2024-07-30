"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankSettingRouter = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const bankSettings_1 = require("../../controllers/bankSettings");
const bankSettingRouter = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/bank/settings', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await bankSettings_1.bankSettingsController.findAll(req, res));
    router.get('/detail/:bankSettingId', async (req, res) => await bankSettings_1.bankSettingsController.findOne(req, res));
    router.post('/', async (req, res) => await bankSettings_1.bankSettingsController.create(req, res));
    router.patch('/', async (req, res) => await bankSettings_1.bankSettingsController.update(req, res));
    router.delete('/', async (req, res) => await bankSettings_1.bankSettingsController.remove(req, res));
};
exports.bankSettingRouter = bankSettingRouter;
