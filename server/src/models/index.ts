const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: String,
    isEdit: Boolean,
    isDone: Boolean,
});

const Task = mongoose.model('tasks', taskSchema);

export default Task;
