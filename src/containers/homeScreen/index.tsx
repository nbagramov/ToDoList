import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../redux/actions";
import { Tasks } from "../../utils/interfaces";
import { styles } from "../../styles";
import ItemList from "./components/itemList";

const HomeScreen = (): React.ReactElement => {
  const [task, setTask] = useState<string>('');
  const tasks = useSelector<Tasks, string[]>(state => state.tasks);
  const dispatch = useDispatch();

  const onChange = (task: string): void => {
    setTask(task)
  };

  const onCreateTask = (task: string): void => {
    if (task) {
      if (!tasks.some((item: string) => item === task)) {
        dispatch(createTask(task))
        setTask('')
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To do list</Text>

      <ItemList />

      <View style={styles.inputContainer}>
        <TextInput
          value={task}
          placeholder="Enter item..."
          style={styles.input}
          onSubmitEditing={(text) => onCreateTask(text.nativeEvent.text)}
          onChange={(item) => onChange(item.nativeEvent.text)}
        />

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => onCreateTask(task)}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
