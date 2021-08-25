import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteTask,
  editTask,
  getTasks,
  selectTask
} from '../../../store/actions';
import {Task, Tasks} from '../../../utils/interfaces';
import { styles } from '../../../styles';

const ItemList = (): React.ReactElement => {
  const [text, setText] = useState<string>('');
  const tasks = useSelector<Tasks, Tasks>(state => state);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getTasks()); }, []);

  const renderItems = (item:Task, index: number): React.ReactElement => {

    const onEditTask = (): void => {
      setText(item.task);
      dispatch(editTask(item, index, text));
    };

    return (
      <View style={styles.items}>
        {item.isEdit
          ? <TextInput
            value={text}
            autoFocus
            onEndEditing={() => onEditTask()}
            onChangeText={(text) => setText(text)}
            style={styles.inputItem}
          />
          : <TouchableOpacity
            onPress={() => dispatch(selectTask(item, index))}
            style={styles.itemsTouch}
          >
            <Text
              style={item.isDone
                ? styles.itemsTextCrossed
                : styles.itemsText}
            >
              {item.task}
            </Text>
          </TouchableOpacity>
        }

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => onEditTask()}
          >
            <Text style={styles.buttonTextSmall}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch(deleteTask(item, index))}
          >
            <Text style={styles.buttonTextSmall}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={tasks.map(task => task)}
      renderItem={(item) => renderItems(item.item, item.index)}
      keyExtractor={(item) => item.task}
      style={styles.flatlistContainer}
    />
  );
};

export default ItemList;
