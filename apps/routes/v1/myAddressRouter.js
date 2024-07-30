"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myAddressRoutes = void 0;
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const myAddresses_1 = require("../../controllers/myAddresses");
const myAddressRoutes = (app) => {
    const router = express_1.default.Router();
    app.use('/api/v1/my-address', middlewares_1.middleware.useAuthorization, router);
    router.get('/', async (req, res) => await myAddresses_1.myAddressController.find(req, res));
    router.post('/', async (req, res) => await myAddresses_1.myAddressController.create(req, res));
    router.patch('/', async (req, res) => await myAddresses_1.myAddressController.update(req, res));
    router.delete('/', async (req, res) => await myAddresses_1.myAddressController.remove(req, res));
};
exports.myAddressRoutes = myAddressRoutes;
