import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Parks from './components/pages/Parks';
import Park from './components/pages/Park';
import Profile from './components/pages/Profile';
import Map from './components/pages/Map';
import Login from './components/auth/Login';
// import LoginPage from './components/auth/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
          <Route exact path='/' exact={true} component={ Home } />
          <Route exact path='/parks' exact={true} component={ Parks } />
          <Route exact path='/park' exact={true} component={ Park } />
          <Route exact path='/map' exact={true} component={ Map } />
          <Route exact path='/profile' exact={true} component={ Profile } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
