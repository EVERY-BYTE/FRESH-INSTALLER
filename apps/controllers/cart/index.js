"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
const create_1 = require("./create");
const find_1 = require("./find");
const remove_1 = require("./remove");
const update_1 = require("./update");
exports.cartController = {
    create: create_1.createCart,
    findAll: find_1.findAllCart,
    findOne: find_1.findDetailCart,
    remove: remove_1.removeCart,
    update: update_1.updateCart
};
