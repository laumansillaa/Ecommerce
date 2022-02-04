const router = require('express').Router();

router.post('/signup', require('./signup'));
router.post('/localsignin', require('./localSignin'));



module.exports = router;