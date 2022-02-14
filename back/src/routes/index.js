module.exports = function (app) {
    app.use('/session', require('./session'));
    app.use('/posts', require('./posts'));
    app.use('/user', require('./user'));
    app.use('/donations', require('./mercadopago'))
}