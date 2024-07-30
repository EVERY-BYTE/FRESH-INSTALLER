"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const find_1 = require("./find");
const login_1 = require("./login");
const register_1 = require("./register");
const remove_1 = require("./remove");
const update_1 = require("./update");
const whatsappVerification_1 = require("./whatsappVerification");
exports.UsersController = {
    login: login_1.userLogin,
    register: register_1.userRegister,
    findAll: find_1.findAllUser,
    findDetailUser: find_1.findDetailUser,
    update: update_1.updateUser,
    remove: remove_1.removeUser,
    createWhatsAppVerification: whatsappVerification_1.createWhatsAppVerification,
    checkWhatsAppVerification: whatsappVerification_1.checkWhatsAppVerification
};
