const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    sequelize.define('Token', {
        token : {
            type: DataTypes.STRING,

        },
        email: {
            type: DataTypes.STRING
        }
    })
}