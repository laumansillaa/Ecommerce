const router = require('express').Router();
//router.post('/signout', require('./signout'))

router.post('/newPost', require('./newPost'));
router.put('/updatePost', require('./updatePost'));


module.exports = router;