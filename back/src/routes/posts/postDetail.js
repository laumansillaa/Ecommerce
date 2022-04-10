const axios = require('axios');
const { Post } = require('../../db').models;


module.exports = async function (req, res, next) {

    const {id} = req.params;

    try {

        let postDetail = await Post.findByPk(id)

        res.status(200).send(postDetail)

    } catch (error) {
        next(error)
    }
}

