import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AUTH_USER } from './actions/types'
import Header from './components/Header'
import Home from './components/Home'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Signin from './components/auth/signin'
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'
import Parks from './components/Parks'
import { PrivateRoute } from './components/auth/require_auth'
import reducers from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './components/style/index.css';
import Park from './components/Park';
import configureStore from './configureStore'
import Map from './components/Map';

injectTapEventPlugin()

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
// const store = configureStore();
const token = localStorage.getItem('token')

if (token) {
  store.dispatch({type: AUTH_USER})
}


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <div>
          <Header/>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signout" component={Signout}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/parks" component={Parks}/>
          <Route path="/map" component={Map}/>
          <PrivateRoute path="/park" component={Park}/>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
  , document.getElementById('root'))
