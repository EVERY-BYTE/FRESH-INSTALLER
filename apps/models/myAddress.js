"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAddressesModel = void 0;
/* eslint-disable @typescript-eslint/indent */
const sequelize_1 = require("sequelize");
const _1 = require(".");
const zygote_1 = require("./zygote");
exports.MyAddressesModel = _1.sequelize.define('my_addresses', {
    ...zygote_1.ZygoteModel,
    myAddressId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        defaultValue: (0, sequelize_1.UUIDV4)()
    },
    myAddressName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    myAddressKontak: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    myAddressDetail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    myAddressPostalCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    myAddressProvinsi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    myAddressKabupaten: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    myAddressKecamatan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    ..._1.sequelize,
    timestamps: false,
    tableName: 'my_addresses',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
