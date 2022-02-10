const router = require('express').Router();

router.post('/signup', require('./signup'));
router.post('/localsignin', require('./localSignin'));
router.post('/signout', require('./signout'))


module.exports = router;