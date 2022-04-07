const { Donations } = require('../../db').models;

module.exports = async function (req, res, next) {
    console.log('-------- ROUTE MERCADO PAGO FAILURE --------')

    const failure = req.query.preference_id

    const payments = await Donations.update({
        status: 'FAILURE'
    }, {
        where: {
            preferenceId: failure
        }
    })

    res.status(200).send('Su pago ha sido rechazado')

}