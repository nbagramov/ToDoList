import { createStore, applyMiddleware, Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import {
  watcherLoadTasks,
  watcherCreateTasks,
  watcherUpdateTasks,
  watcherRemoveTasks
} from './saga';
import { Action, Tasks } from '../utils/interfaces';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer as Reducer<Tasks, Action>, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherLoadTasks);
sagaMiddleware.run(watcherCreateTasks);
sagaMiddleware.run(watcherUpdateTasks);
sagaMiddleware.run(watcherRemoveTasks);
