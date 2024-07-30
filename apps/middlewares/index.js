"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const access_1 = require("./access");
const ip_black_list_1 = require("./ip-black-list");
const upload_file_1 = require("./upload-file");
exports.middleware = { useAuthorization: access_1.useAuthorization, ipBlackList: ip_black_list_1.ipBlackList, uploadMidleWare: upload_file_1.uploadMidleWare };
