const Task = require('../models/index')

module.exports.getAllTasks = (req, res) => {
    Task.find().then(result => res.send(result));
}

module.exports.createNewTask = (req, res) => {
    const task = new Task ({
        task: req.query.task,
        isEdit: false,
        isDone: false,
    });
    task.save().then(result => res.send(result))
}

module.exports.updateTaskInfo = (req, res) => {
    Task.updateOne({_id: req.query._id},
        {
            task: req.body.task,
            isEdit: req.body.isEdit,
            isDone: req.body.isDone,
        }
    ).then(() => {
        Task.find().then(result => res.send(result));
    })
}

module.exports.deleteTask = (req, res) => {
    Task.deleteOne({_id: req.query._id}).then(() => res.send('Deleted'));
}
