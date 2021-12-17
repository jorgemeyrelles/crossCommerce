const router = require('express').Router();
const ran = require('../controllers');
const { emptyId, invalidId } = require('../validation/getIdValidation');

router.get('/', emptyId);
router.get('/:id', invalidId, ran.newSelected);

module.exports = router;