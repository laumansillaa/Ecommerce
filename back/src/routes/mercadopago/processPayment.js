const mercadopago = require('mercadopago');
const {TOKEN_MERCADOPAGO} = process.env;

mercadopago.configure({
    access_token: TOKEN_MERCADOPAGO
})


module.exports = async (req, res, next) => {
    
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
                success: 'http://localhost:3001/payment/success',
                failure: 'http://localhost:3001/payment/failure',
                pending: 'http://localhost:3001/payment/pending'
            },
            marketplace: "Dognacioes",
            auto_return: "approved"
        }

        mercadopago.preferences.create(preference)

        .then((response) => {
            res.json({
                id: response.body.id,
                sandbox: response.body.sandbox_init_point
            })
        })

    } catch (error) {next(error)}
}