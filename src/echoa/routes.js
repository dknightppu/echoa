const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Existing routes
router.get('/', controller.getClassics); // GET all albums
router.post('/', controller.createClassics); // POST new album
router.put('/:id', controller.updateClassics); // PUT update album
router.get('/:id', controller.getClassicsById); // GET one album by ID

module.exports = router;
