import { TextStyle, ViewStyle } from "react-native";

export interface Style {
  [key: string]: ViewStyle | TextStyle,
}

export interface Task {
  task: string,
  isEdit: boolean,
  isDone: boolean,
}

export interface Tasks extends Array<Task>{}

export interface Action {
  type: string,
  task: Task | string,
  index?: number,
  text?: string,
}
