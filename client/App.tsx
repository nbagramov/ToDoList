import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import HomeScreen from './src/containers/homeScreen';

const app = (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

const App = (): React.ReactElement => (app);

export default App;
