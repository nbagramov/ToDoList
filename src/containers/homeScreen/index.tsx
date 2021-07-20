import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/actions";
import ItemList from "./components/itemList";
import { styles } from "../../styles";

const HomeScreen = (): React.ReactElement => {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();

  const onCreateTask = (task: string): void => {
    dispatch(createTask(task))
    setTask('')
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
          onChange={(item) => setTask(item.nativeEvent.text)}
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
