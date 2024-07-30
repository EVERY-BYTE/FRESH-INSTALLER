"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiwilioSettingController = void 0;
const createOrUpdateWaBlasSettings_1 = require("./createOrUpdateWaBlasSettings");
const findWaBlasSettings_1 = require("./findWaBlasSettings");
exports.tiwilioSettingController = {
    find: findWaBlasSettings_1.findWaBlasSettings,
    createOrUpdate: createOrUpdateWaBlasSettings_1.createOrUpdateWaBlassSettings
};
