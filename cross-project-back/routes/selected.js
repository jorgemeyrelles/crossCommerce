const router = require('express').Router();
const ran = require('../controllers');

router.get('/:id', ran.newSelected);

module.exports = router;