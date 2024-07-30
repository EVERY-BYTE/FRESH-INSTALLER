"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.SettingsModel = _1.sequelize.define('settings', {
    ...zygote_1.ZygoteModel,
    settingId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    settingBanner: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    settingWhatsappNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'settings',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
