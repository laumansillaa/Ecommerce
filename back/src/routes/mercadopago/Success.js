const { Donations } = require('../../db').models;
const { User } = require('../../db').models;

module.exports = async (req, res, next) => {
    console.log('------ ROUTE DONATION SUCCESS ------ ')
    try {
        //BUSCO LA ORDEN
        const prefId = req.query.preference_id
        const donation = await Donations.findAll({
            where: {
                preferenceId: prefId
            }
        });

        //USUARIO
        //console.log("DONATION EMAIL", donation[0].email)
        const userPayment = await User.findAll({
            where: {
                email: donation[0].email
            }
        });

        //ACTUALIZO EL ESTATUS

        const updateDonation = await Donations.update({
            status: "SUCCESS"
        }, {
            where: {
                preferenceId: prefId
            }
        })
    
        //ACTUALIZO LAS CONTRIBUCIONES
        



        if(true) {
            const contUser = Number(userPayment[0].contributions) + Number(prefId[0].ars)
            const contribution = await User.update({
                contributions: contUser.toString()
            }, {
                where: {
                    email: donation[0].email
                }
            })
        } 


        //console.log("SUCCESS DONATION ----> ",updateDonation[0])


        res.status(200).send('Soy success')

    } catch (error) {
        next(error)
    }
}