const router = require('express').Router();

//router.post('/newPost', require('./newPost'));

router.put('/updateData', require('./updateData'));
router.get('/getData', require('./getData'));




module.exports = router;