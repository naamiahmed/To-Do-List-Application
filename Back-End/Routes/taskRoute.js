const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../Controllers/taskController.js');

router.post('/create', createTask);
router.get('/get', getTasks);
router.put('/update:id', updateTask);
router.delete('/delete:id', deleteTask);

module.exports = router;