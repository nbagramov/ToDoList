import { createStore, Reducer } from "redux";
import { reducer } from "./reducer";
import { Task, Tasks } from "../utils/interfaces";

const initState: Tasks = {
  tasks: [],
  doneTasks: [],
}

export const store = createStore(reducer as Reducer<Tasks, Task>, initState);
