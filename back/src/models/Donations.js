const { DataTypes } = require('sequelize');


module.exports = function (sequelize) {
    sequelize.define('Donations', {
        preferenceId: {
            type: DataTypes.STRING,
            allownull: false
        },
        email: {
            type: DataTypes.STRING,
            allownull: false
        },
        ars: {
            type: DataTypes.STRING,
            allownull: false
        },
        status: {
            type: DataTypes.STRING,
            allownull: false
        }
    })
}