"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.CategoriesModel = _1.sequelize.define('categories', {
    ...zygote_1.ZygoteModel,
    categoryIcon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    categoryId1: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    categoryName1: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    categoryId2: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    categoryName2: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    categoryId3: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    categoryName3: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'categories',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
