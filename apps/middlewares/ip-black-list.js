"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipBlackList = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../utilities/response");
// import { CONFIG } from '../configs'
const ipBlackList = async (req, res, next) => {
    try {
        // if (CONFIG.ipBlackList.indexOf(req.ip) > -1) {
        //   const message = 'access denied'
        //   const response = ResponseData.error(message)
        //   return res.status(StatusCodes.UNAUTHORIZED).json(response)
        // }
        next();
    }
    catch (error) {
        const message = `unable to process request! error ${error.message}`;
        const response = response_1.ResponseData.error(message);
        return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
};
exports.ipBlackList = ipBlackList;
