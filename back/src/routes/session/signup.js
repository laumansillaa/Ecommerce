const axios = require('axios');
const {User, Token} = require('../../db').models;
const nodemailer = require('nodemailer');
const jwebtoken = require('jsonwebtoken');
const { EMAIL_ADDRESS, EMAIL_PASSWORD } = process.env


module.exports = async function (req, res, next) {
    console.log('------ SESSION SING UP ROUTE ------');
    
    try {
        
        const {firstname, lastname, email, password, phone} = req.body;

        const createUser = User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phone: phone,
            verifieldUser: true,
            sessionType: 'email'
        })

        //jbtoken 
        const token = jwebtoken.sign({email: email}, 'hola', {expiresIn: '1h'})
        const userToken = await Token.create({
            email,
            token
        })

        //Model para guardar el token? 


        //Nodemailer

        const transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
                user: `${EMAIL_ADDRESS}`,
                pass: `${EMAIL_PASSWORD}`
            }
        })

        const mailOption = {
            from: `${EMAIL_ADDRESS}`,
            to: email,
            subject: 'Confirm user',
            text: `Verificar usuario con el siguiente link ${token}`
        }

        transporter.sendMail(mailOption, (err, response) => {
            if(err){
                console.log(err)
            } else {
                console.log('Email to confirmation sent')
            }
        })


        return res.status(200).send('Sign up succeeded.')

    } catch (error) {
        next (error)
    }
}