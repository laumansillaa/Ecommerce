const axios = require('axios');
const { Post } = require('../../db').models;


module.exports = async function (req, res, next ) {
    console.log('----- ROUTE NEW POST -----')
    try {

        const {name, race, age, size, status, observations, images} = req.body;

        if (!req.body) {
            res.status(400).send('No data entered.')
        }

        if (!images || !status) {
            res.status(400).send('Data are required')
        } else {
            const newPosts = await Post.create({
                name: name,
                race: race,
                age: age,
                size: size,
                status: status,
                observations: observations,
                images: images
            })

            await req.user.addPosts(newPosts)

            console.log('USER POSTS:', req.user)

            res.status(200).send('Post made successfully ')

        }

    } catch (error) {
        next(error)
    }
}