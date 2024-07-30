"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category2Model = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
const category1_1 = require("./category1");
exports.Category2Model = _1.sequelize.define('category2', {
    ...zygote_1.ZygoteModel,
    categoryId2: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    categoryId1: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'category2',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
exports.Category2Model.hasOne(category1_1.Category1Model, {
    sourceKey: 'categoryId1',
    foreignKey: 'categoryId1'
});
