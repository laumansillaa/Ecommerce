const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    sequelize.define('posts', {
        name: {
            type: DataTypes.STRING,
            
        },
        race: {
            type: DataTypes.STRING,
            
        },
        age: {
            type: DataTypes.STRING
        },
        size: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        observations: {
            type: DataTypes.STRING,
            
        },
        images: {
            type: DataTypes.TEXT, 
            allowNull: false
        }

    })
}