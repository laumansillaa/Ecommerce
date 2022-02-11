const { User, Post } = require('../../db.js').models;


module.exports = async function (req, res, next) {
    console.log('----- ROUTE GET DATA -----');

    try {

        const posts = await Post.findAll({
            where: {
                userId: req.user.id
            }
        })

        return res.status(200).send({
            ...req.user.dataValues,
            posts
        })

    } catch (error) {next(error)}

}