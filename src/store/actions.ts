import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  GET_TASKS,
  PUT_TASKS,
  SELECT_TASK,
} from "./types";
import {Task, Tasks} from "../utils/interfaces";

export const createTask = (item: string)=> {
  return {
    type: CREATE_TASK,
    item: item,
  }
}

export const deleteTask = (task: Task, index: number)=> {
  return {
    type: DELETE_TASK,
    task: task,
    index: index,
  }
}

export const selectTask = (task: Task, index: number)=> {
  return {
    type: SELECT_TASK,
    task: task,
    index: index,
  }
}

export const editTask = (task: Task, index: number, text: string)=> {
  return {
    type: EDIT_TASK,
    task: task,
    index: index,
    text: text,
  }
}

export const getTasks = ()=> {
  return {
    type: GET_TASKS,
  }
}

export const putTasks = (tasks: Tasks)=> {
  return {
    type: PUT_TASKS,
    tasks: tasks
  }
}
