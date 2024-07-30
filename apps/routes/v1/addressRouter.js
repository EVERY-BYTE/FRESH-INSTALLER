"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const addresses_1 = require("../../controllers/addresses");
const addressRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/addresses', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await addresses_1.addressController.find(req, res));
    router.post('/', async (req, res) => await addresses_1.addressController.create(req, res));
    router.patch('/', async (req, res) => await addresses_1.addressController.update(req, res));
    router.delete('/', async (req, res) => await addresses_1.addressController.remove(req, res));
};
exports.addressRoutes = addressRoutes;
