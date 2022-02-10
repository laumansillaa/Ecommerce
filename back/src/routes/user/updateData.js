const {User} = require('../../db').models;


module.exports = async function (req, res, next) {
    console.log('----- ROUTE GET DATA -----');

    try{
        const {firstname, lastname, email, password, phone} = req.body;

        await req.user.update({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phone: phone
        });

        return res.status(200).send('User update succeeded')

    } catch (error) {
        next(error)
    }
}