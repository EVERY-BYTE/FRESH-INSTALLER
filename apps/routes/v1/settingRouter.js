"use strict";
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingRouters = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const settings_1 = require("../../controllers/settings");
const settingRouters = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/settings', router);
    router.get('/', async (req, res) => await settings_1.settingsController.findSettings(req, res));
    router.patch('/', middlewares_1.middleware.useAuthorization, async (req, res) => await settings_1.settingsController.updateSettings(req, res));
};
exports.settingRouters = settingRouters;
