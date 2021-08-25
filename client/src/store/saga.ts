import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import {Action, Tasks} from '../utils/interfaces';
import { putTasks } from './actions';
import {
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  SELECT_TASK,
  GET_TASKS
} from './types';

/** GET TODOS */
function* workerLoadTasks() {
  try {
    const data: Tasks = yield axios.get('http://localhost:7000/').then(res => res.data);
    yield put(putTasks(data));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherLoadTasks() {
  yield takeEvery(GET_TASKS, workerLoadTasks);
}

/** CREATE TASK */
function* workerCreateTasks({ item }: Action) {
  try {
    const data: Tasks = yield axios.get('http://localhost:7000/').then(res => res.data);
    if (!data.some((task) => task.task === item)) {
      yield axios.post(`http://localhost:7000/createTask/?task=${item}`);
    }
    const newData: Tasks = yield axios.get('http://localhost:7000/').then(res => res.data);
    yield put(putTasks(newData));
  } catch (e) {
    console.error(e);
  }
}

export function* watcherCreateTasks() {
  yield takeEvery(CREATE_TASK, workerCreateTasks);
}

/** UPDATE TASK */
function* workerUpdateTasks({ task }: Action) {
  try {
    yield axios.patch(`http://localhost:7000/updateTask?_id=${task?._id}`, {
      task: task?.task,
      isEdit: task?.isEdit,
      isDone: task?.isDone
    });
  } catch (e) {
    console.error(e);
  }
}

export function* watcherUpdateTasks() {
  yield takeEvery(EDIT_TASK, workerUpdateTasks);
  yield takeEvery(SELECT_TASK, workerUpdateTasks);
}

/** DELETE TASK */
function* workerRemoveTasks({ task }: Action) {
  try {
    yield axios.delete(`http://localhost:7000/deleteTask/?_id=${task?._id}`);
  } catch (e) {
    console.error(e);
  }
}

export function* watcherRemoveTasks() {
  yield takeEvery(DELETE_TASK, workerRemoveTasks);
}
