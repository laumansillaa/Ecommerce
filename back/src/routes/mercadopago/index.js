const router = require('express').Router();

router.post('/process-payment', require('./processPayment.js'))




module.exports = router;