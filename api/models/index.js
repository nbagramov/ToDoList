const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: String,
    isEdit: Boolean,
    isDone: Boolean,
})

let Task;
module.exports = Task = mongoose.model("tasks", taskSchema)
