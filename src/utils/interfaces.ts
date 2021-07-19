import { TextStyle, ViewStyle } from "react-native";

export interface Style {
  [key: string]: ViewStyle | TextStyle,
}

export interface IFlatListItem {
  item: string,
  index: number
}

export interface Tasks {
  tasks: string[],
  doneTasks: string[],
}

export interface Task {
  type: string,
  item?: string,
  index?: number,
}
