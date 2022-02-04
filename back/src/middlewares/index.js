const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config()

module.exports = function (app) {

    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(cookieParser());
    app.use(morgan('dev'));
    
    app.use(
        cors({
            origin: '*',
            credentials: true
        })
    );
    
    //Express-session && Passport 
    
    app.use(session({
        secret: process.env.EXPRESS_SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 360*24*60*60*1000}
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    
    
    //Control de acceso 
    
    // app.use((req, res, next) => {
    //     console.log('----- ACCESS MIDDLEWARE 1 -----')
    
    //     if ( (!(req.url.startsWith('/session/') || req.urlstartsWith('/password/')) || req.url === '/session/signout') && 
    //         !req.isAuthenticated()
    //     ) {
    //         return res.status(401).send('Access denied.')
    //     } else next() 
    // })
    
    // app.use((req, res, next) => {
    //     console.log('------ ACCESS MIDDLEWARE 2 ------')
    
    //     if (
    //         ((req.url.startsWith('/session/') && req.url !== '/session/signout') || req.url.startsWith('/password'))
    //             && req.isAuthenticated()
    //     ) {
    //         return res.status(200).send('You have already signed up.')
    //     } else next()
    // });
};