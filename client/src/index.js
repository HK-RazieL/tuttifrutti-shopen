import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from "./redux/reducers";
import './static/style.css';

const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Navbar />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
