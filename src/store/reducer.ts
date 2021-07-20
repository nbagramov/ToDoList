import {CREATE_TASK, DELETE_TASK, EDIT_TASK, SELECT_TASK} from "./types";
import {Action, Tasks, Task} from "../utils/interfaces";

export const reducer = (state: Tasks, action: Action): Tasks => {
    switch (action.type) {
      case CREATE_TASK:
        if (action.task) {
          if (!state.some((item) => item.task === action.task)) {
            state.push({task: action.task, isEdit: false, isDone: false} as Task)
          }
        }
        return state;
      case DELETE_TASK:
        if (action.index || action.index === 0) {
          state.splice(action.index, 1);
          return [...state];
        }
        return state;
      case SELECT_TASK:
        if (action.index || action.index === 0) {
          state[action.index].isDone = !state[action.index].isDone
          return [...state];
        }
        return state;
      case EDIT_TASK:
        if (action.index || action.index === 0) {
          state[action.index].isEdit = !state[action.index].isEdit;
          if (action.text) { state[action.index].task = action.text; }
          return [...state];
        }
        return state;
      default:
        return state;
    }
};
