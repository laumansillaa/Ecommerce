const router = require('express').Router();

router.post('/process-payment', require('./processPayment.js'))
router.get('/success', require('./Success.js'));




module.exports = router;