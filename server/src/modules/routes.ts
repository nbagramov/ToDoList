const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createNewTask,
    updateTaskInfo,
    deleteTask,
} = require('./controllers');

router.get('/', getAllTasks);
router.post('/createTask', createNewTask);
router.patch('/updateTask', updateTaskInfo);
router.delete('/deleteTask', deleteTask);

module.exports = router;
