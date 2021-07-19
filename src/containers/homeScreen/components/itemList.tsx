import { styles } from "../../../styles";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { IFlatListItem, Tasks } from "../../../utils/interfaces";
import { deleteTask, selectTask } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ItemList = (): React.ReactElement => {
  const doneTasks = useSelector<Tasks, string[]>(state => state.doneTasks);
  const tasks = useSelector<Tasks, string[]>(state => state.tasks);
  const dispatch = useDispatch();

  const onSelectTask = (item: string) => {
    dispatch(selectTask(item));
  }

  const onDeleteTask = (index: number): void => {
    dispatch(deleteTask(index));
  }

  const renderButtons = (index: number) => (
    <TouchableOpacity
      onPress={() => onDeleteTask(index)}
      style={styles.buttons}
    >
      <Text style={styles.buttonText}>Delete</Text>
    </TouchableOpacity>
  )

  const renderItems = ({ item, index }: IFlatListItem) => (
    <View style={styles.items}>
        <TouchableOpacity
          onPress={() => onSelectTask(item)}
          style={styles.itemsTouch}
          >
          <Text
            style={doneTasks.includes(item)
            ? styles.itemsTextCrossed
            : styles.itemsText}
          >
            {item}
          </Text>
        </TouchableOpacity>
      {renderButtons(index)}
    </View>
  )

  return (
    <FlatList
      data={tasks}
      renderItem={renderItems}
      keyExtractor={(item) => item}
      style={styles.flatlistContainer}
    />
  )
}

export default ItemList;
