import { CREATE_TASK, DELETE_TASK, SELECT_TASK } from "./types";
import { Task, Tasks } from "../utils/interfaces";

export const reducer = (state: Tasks, action: Task): Tasks => {
    switch (action.type) {
      case CREATE_TASK:
        if (action.item) {
          return {
            tasks: [...state.tasks, action.item],
            doneTasks: [...state.doneTasks]
          };
        }
        return state;
      case DELETE_TASK:
        if (action.index || action.index === 0) {
          if (state.doneTasks.includes(state.tasks[action.index])) {
            state.doneTasks = state.doneTasks.filter(element => element !== state.tasks[action.index!]);
          }
          state.tasks.splice(action.index, 1)
        }
        return { tasks: [...state.tasks], doneTasks: [...state.doneTasks]};
      case SELECT_TASK:
        if (action.item) {
          if (state.doneTasks.includes(action.item)) {
            const newDoneTasks = state.doneTasks.filter(element => element !== action.item)
            return {tasks: [...state.tasks], doneTasks: [...newDoneTasks]}
          } else {
            return {tasks: [...state.tasks], doneTasks: [...state.doneTasks, action.item]}
          }
        }
        return state;
      default:
        return state;
    }
};
