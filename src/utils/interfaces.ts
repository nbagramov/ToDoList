import { TextStyle, ViewStyle } from 'react-native';

export interface Style {
  [key: string]: ViewStyle | TextStyle,
}

export interface Task {
  _id?: number,
  task: string,
  isEdit: boolean,
  isDone: boolean,
}

export type Tasks = Array<Task>

export interface Action {
  type: string,
  index?: number,
  item?: string,
  task?: Task,
  text?: string,
  tasks?: Tasks
}
