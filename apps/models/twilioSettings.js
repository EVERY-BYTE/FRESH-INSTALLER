"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioSettingsModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const moment_1 = __importDefault(require("moment"));
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.TwilioSettingsModel = _1.sequelize.define('twilio_settings', {
    ...zygote_1.ZygoteModel,
    twilioSettingId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    twilioSettingAccountSid: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    twilioSettingAuthToken: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    twilioSettingVerifyService: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'twilio_settings',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB',
    hooks: {
        beforeCreate: (record, options) => {
            const now = (0, moment_1.default)().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss');
            record.createdAt = now;
            record.updatedAt = null;
        },
        beforeUpdate: (record, options) => {
            const now = (0, moment_1.default)().add(7, 'hours').format('YYYY-MM-DD HH:mm:ss');
            record.updatedAt = now;
        }
    }
});
