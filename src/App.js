import React from 'react';
import { Provider } from 'react-redux';
import { Tickets } from './containers';
import { Header } from './components'
import store from './redux/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="main-content">
          <Tickets />
        </div>
      </div>
    </Provider>
  );
}

export default App;
