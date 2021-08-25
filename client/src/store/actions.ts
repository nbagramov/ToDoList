import {Action, Task, Tasks} from '../utils/interfaces';
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  GET_TASKS,
  PUT_TASKS,
  SELECT_TASK,
} from './types';

export const createTask = (item: string): Action=> {
  return {
    type: CREATE_TASK,
    item: item,
  };
};

export const deleteTask = (task: Task, index: number): Action=> {
  return {
    type: DELETE_TASK,
    task: task,
    index: index,
  };
};

export const selectTask = (task: Task, index: number): Action=> {
  return {
    type: SELECT_TASK,
    task: task,
    index: index,
  };
};

export const editTask = (task: Task, index: number, text: string): Action=> {
  return {
    type: EDIT_TASK,
    task: task,
    index: index,
    text: text,
  };
};

export const getTasks = (): Action=> {
  return {
    type: GET_TASKS,
  };
};

export const putTasks = (tasks: Tasks): Action=> {
  return {
    type: PUT_TASKS,
    tasks: tasks
  };
};
