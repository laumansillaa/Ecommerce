const { Post } = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('----- ROUTE UPDATE POST -----');

    try {
        const {id, name, race, age, size, status, observations, images} = req.body;

        const userPost = await Post.findOne({where: {id: id}})

        await userPost.update({
            name,
            race,
            age,
            size,
            status,
            observations,
            images
        })

        res.status(200).send('Post update succeeded.')

    } catch (error) {
        next(error);
    }



}