const router = require('express').Router();
//router.post('/signout', require('./signout'))

router.post('/newPost', require('./newPost'));
router.put('/updatePost', require('./updatePost'));
router.get('/allPost', require('./allPost'))


module.exports = router;