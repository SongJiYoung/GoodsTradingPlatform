import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import TopButton from './components/common/TopButton';
import reducer from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <TopButton />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
