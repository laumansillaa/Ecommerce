module.exports = function (app) {
    app.use('/session', require('./session'));
}