"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myAddressController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.myAddressController = {
    create: create_1.createMyAddress,
    find: find_1.findMyAddress,
    remove: remove_1.removeMyAddress,
    update: update_1.updateMyAddress
};
