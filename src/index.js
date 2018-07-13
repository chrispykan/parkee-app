import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
// import {App} from './App';
import './index.css';

import App from './App'
// setup temporary backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();



ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
, document.getElementById('root'))
