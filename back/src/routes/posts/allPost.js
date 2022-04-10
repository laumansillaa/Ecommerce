const axios = require('axios');
const { Post } = require('../../db').models;


module.exports = async function (req, res, next) {
    console.log("------ ROUTE ALL POST ------")

    const allPost = await Post.findAll()
    //console.log('soy allpost',allPost)

    res.status(200).json(allPost)
}