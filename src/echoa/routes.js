const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getClassics);
router.get('/', controller.createClassics);
router.get('/:id', controller.updateClassics);

module.exports = router;

