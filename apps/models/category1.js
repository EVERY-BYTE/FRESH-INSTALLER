"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category1Model = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.Category1Model = _1.sequelize.define('category1', {
    ...zygote_1.ZygoteModel,
    categoryId1: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    categoryIcon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'category1',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
