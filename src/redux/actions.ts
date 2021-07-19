import { CREATE_TASK, DELETE_TASK, SELECT_TASK } from "./types";
import { Task } from "../utils/interfaces";

export const createTask = (item: string): Task=> {
  return {
    type: CREATE_TASK,
    item: item,
  }
}

export const deleteTask = (index: number): Task=> {
  return {
    type: DELETE_TASK,
    index: index,
  }
}

export const selectTask = (item: string): Task=> {
  return {
    type: SELECT_TASK,
    item: item,
  }
}
