const router = require('express').Router();

router.post('/process-payment', require('./processPayment.js'))
router.get('/success', require('./Success.js'));
router.get('/failure', require('./failure.js'))




module.exports = router;