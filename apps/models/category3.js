"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category3Model = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
const category1_1 = require("./category1");
const category2_1 = require("./category2");
exports.Category3Model = _1.sequelize.define('category3', {
    ...zygote_1.ZygoteModel,
    categoryId1: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    categoryId2: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    categoryId3: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'category3',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
exports.Category3Model.hasOne(category2_1.Category2Model, {
    sourceKey: 'categoryId2',
    foreignKey: 'categoryId2'
});
exports.Category3Model.hasOne(category1_1.Category1Model, {
    sourceKey: 'categoryId1',
    foreignKey: 'categoryId1'
});
