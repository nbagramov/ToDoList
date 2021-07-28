import React, { useState } from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/actions';
import ItemList from './components/itemList';
import { styles } from '../../styles';

const HomeScreen = (): React.ReactElement => {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();

  const onCreateTask = (item: string): void => {
    dispatch(createTask(item));
    setTask('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To do list</Text>

      <ItemList />

      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
