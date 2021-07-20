import {CREATE_TASK, DELETE_TASK, EDIT_TASK, SELECT_TASK} from "./types";
import {Task} from "../utils/interfaces";

export const createTask = (task: string)=> {
  return {
    type: CREATE_TASK,
    task: task,
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
