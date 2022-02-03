import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import TopButton from './components/common/TopButton';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <TopButton />
  </BrowserRouter>,
  document.getElementById('root'),
);
