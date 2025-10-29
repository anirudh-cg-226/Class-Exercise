
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ListComponent from './components/ListComponents';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Global State Example</h1>
        <ListComponent />
      </div>
    </Provider>
  );
}

export default App;