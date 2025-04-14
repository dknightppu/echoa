const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getClassics);
router.post('/', controller.createClassics);
router.get('/:id', controller.getClassicsById);
router.put('/:id', controller.updateClassics);

module.exports = router;

