const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allow: false
        },
        sessionType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['google', 'email']]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8,20],
                isAlphanumeric: true,
            }
        },
        phone: {
            type: DataTypes.STRING,
        }, 
        verifieldUser: {
            type: DataTypes.BOOLEAN,

        }
    },
    {
        timestamps: false,
        freezeTableName: true
    })
}