"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiwilioSettingController = void 0;
const createOrUpdateTwilioSettings_1 = require("./createOrUpdateTwilioSettings");
const findTwilioSettings_1 = require("./findTwilioSettings");
exports.tiwilioSettingController = {
    find: findTwilioSettings_1.findTwilioSettings,
    createOrUpdate: createOrUpdateTwilioSettings_1.createOrUpdateTwilioSettings
};
