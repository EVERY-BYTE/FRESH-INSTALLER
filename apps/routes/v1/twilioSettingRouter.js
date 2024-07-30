"use strict";
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.twilioSettingRouter = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const twilioSetting_1 = require("../../controllers/twilioSetting");
const twilioSettingRouter = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/twilio/settings', middlewares_1.middleware.useAuthorization, router);
    router.get('/', (req, res) => twilioSetting_1.tiwilioSettingController.find(req, res));
    router.patch('/', (req, res) => twilioSetting_1.tiwilioSettingController.createOrUpdate(req, res));
};
exports.twilioSettingRouter = twilioSettingRouter;
