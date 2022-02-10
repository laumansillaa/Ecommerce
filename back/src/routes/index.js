module.exports = function (app) {
    app.use('/session', require('./session'));
    app.use('/posts', requiere('./posts'))
}