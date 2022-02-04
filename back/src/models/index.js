module.exports = function (sequelize) {
    require('./User.js')(sequelize);
    require('./Token.js')(sequelize);



    

    //Relaciones
    // const {user} = sequelize.models
    
    const { User, Token } = sequelize.models;
    
    User.belongsToMany(Token, {through: "UserToken"});
}
