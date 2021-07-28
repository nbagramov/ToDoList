import {Action, Tasks} from '../utils/interfaces';
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  PUT_TASKS,
  SELECT_TASK,
} from './types';

const initialState: Tasks = [];

export const reducer = (state: Tasks = initialState, action: Action): Tasks => {
    switch (action.type) {
      case CREATE_TASK:
        if (action.item) {
          if (!state.some((item) => item.task === action.item)) {
            state.push({task: action.item, isEdit: false, isDone: false});
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
          state[action.index].isDone = !state[action.index].isDone;
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
      case PUT_TASKS:
        if (action.tasks) {
          return action.tasks;
        }
        return state;
      default:
        return state;
    }
};
