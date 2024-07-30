"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waBlasController = void 0;
const history_1 = require("./history");
const sendMessage_1 = require("./sendMessage");
exports.waBlasController = {
    findAllHistory: history_1.waBlasHistoryFindAll,
    findDetailHistory: history_1.waBlasHistoryFindOne,
    send: sendMessage_1.waBlasSendMessage
};
