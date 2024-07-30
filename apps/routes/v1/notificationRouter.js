"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const notifications_1 = require("../../controllers/notifications");
const middlewares_1 = require("../../middlewares");
const notificationRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/notifications', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await notifications_1.notificationController.findAll(req, res));
    router.get('/detail/:notificationId', async (req, res) => await notifications_1.notificationController.findOne(req, res));
    router.post('/', async (req, res) => await notifications_1.notificationController.create(req, res));
    router.patch('/', async (req, res) => await notifications_1.notificationController.update(req, res));
    router.patch('/push-token', async (req, res) => await notifications_1.notificationController.updatePushToken(req, res));
    router.delete('/', async (req, res) => await notifications_1.notificationController.remove(req, res));
};
exports.notificationRoutes = notificationRoutes;
