module.exports = function (sequelize) {
    require('./User.js')(sequelize);
    require('./Token.js')(sequelize);
    require('./Posts.js')(sequelize);


    

    //Relaciones
    // const {user} = sequelize.models
    
    const { User, Token, Posts } = sequelize.models;
    
    User.belongsToMany(Token, {through: "UserToken"});
    User.belongsToMany(Posts, {through: 'userPosts'})
}
