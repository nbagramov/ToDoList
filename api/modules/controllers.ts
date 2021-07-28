import { Request, Response } from 'express';
import Task from '../models';

module.exports.getAllTasks = (req: Request, res: Response) => {
    Task.find().then((result: Response) => res.send(result));
};

module.exports.createNewTask = (req: Request, res: Response) => {
    const task = new Task ({
        task: req.query.task,
        isEdit: false,
        isDone: false,
    });
    task.save().then((result: Response) => res.send(result));
};

module.exports.updateTaskInfo = (req: Request, res: Response) => {
    Task.updateOne({_id: req.query._id}, {
        task: req.body.task,
        isEdit: req.body.isEdit,
        isDone: req.body.isDone
    }
    ).then(() => {
        Task.find().then((result: Response) => res.send(result));
    });
};

module.exports.deleteTask = (req: Request, res: Response) => {
    Task.deleteOne({_id: req.query._id}).then(() => res.send('Deleted'));
};
