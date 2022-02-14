const mercadopago = require('mercadopago');
const { Donations } = require('../../db').models;
const {TOKEN_MERCADOPAGO} = process.env;

mercadopago.configure({
    access_token: TOKEN_MERCADOPAGO
})


module.exports = async (req, res, next) => {
    console.log('------ ROUTE PROCESS PAYMENT ------')
    try {
        let preference = {
            items: [
                {
                    title: "Payment process",
                    unit_price: Number(req.body.unit_price),
                    currency_id: "ARS",
                    quantity: 1
                }
            ],
            back_urls: {
                success: `http://localhost:3001/donations/success`,
                failure: 'http://localhost:3001/donations/failure',
                pending: 'http://localhost:3001/donations/pending'
            },
            marketplace: "Dognacioes",
            auto_return: "approved"
        }

        mercadopago.preferences.create(preference)

        .then((response) => {
            //console.log("SOY RESPONSE", response)
            const userDonation = Donations.create({
                preferenceId: response.body.id,
                email: req.user.email,
                ars: req.body.unit_price,
                status: "IN PROCESS"
            })
            console.log("USER MERCADOPAGO", req.user)

            res.json({
                id: response.body.id,
                sandbox: response.body.sandbox_init_point
            })
        })

    } catch (error) {next(error)}
}