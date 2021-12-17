const router = require('express').Router();
const ran = require('../controllers');

router.get('/:id', ran.newRandom);

module.exports = router;