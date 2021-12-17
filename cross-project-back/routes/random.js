const router = require('express').Router();
const ran = require('../controllers');
const { invalidId, emptyId } = require('../validation/getIdValidation');

router.get('/', emptyId);
router.get('/:id', invalidId, ran.newRandom);

module.exports = router;