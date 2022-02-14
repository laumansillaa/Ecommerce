module.exports = function (sequelize) {
    require('./User.js')(sequelize);
    require('./Token.js')(sequelize);
    require('./Post.js')(sequelize);
    require('./Donations.js')(sequelize)

    

    //Relaciones
    // const {user} = sequelize.models
    
    const { User, Token, Post, Donations } = sequelize.models;
    
    User.belongsToMany(Token, {through: "UserToken"});
    User.belongsToMany(Post, {through: "userPosts", foreignKey: "userId"})
    User.hasOne(Donations, {foreignKey: "userId"})
}
