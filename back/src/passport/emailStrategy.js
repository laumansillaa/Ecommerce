const LocalStrategy = require('passport-local').Strategy

module.exports = function (passport, User) {
    passport.use('local', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async function (email, password, done) {
        console.log('----- PASSPORT LOCAL STRATEGY -----')
        try {
            //console.log('LLEGUE')
            if (typeof email !== 'string' || !email.length > 0) return done(null, false);

            const user = await User.findOne({where: {email: email}})
            //console.log("SOY EL USER PASSPORT", user)
            if (!user || user.password !== password) {
                return done (null, false)
            } else {
                return done(null, user)
            }
        } catch (err) {return done(err)}
    }
    ));
};