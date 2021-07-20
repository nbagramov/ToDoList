import { createStore, Reducer } from "redux";
import { reducer } from "./reducer";
import { Action, Tasks } from "../utils/interfaces";

const initState: Tasks = []

export const store = createStore(reducer as Reducer<Tasks, Action>, initState);
