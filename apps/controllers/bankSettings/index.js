"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankSettingsController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.bankSettingsController = {
    create: create_1.createBankSetting,
    findAll: find_1.findAllBankSettings,
    findOne: find_1.findDetailBankSetting,
    remove: remove_1.removeBankSetting,
    update: update_1.updateBankSetting
};
