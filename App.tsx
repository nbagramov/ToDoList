import React from 'react';
import HomeScreen from "./src/containers/homeScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const app = (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
)

const App = (): React.ReactElement => (app);

export default App;
