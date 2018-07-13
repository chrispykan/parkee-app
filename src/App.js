import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { history } from './_helpers';
import { PrivateRoute } from './_components';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { alertActions } from './_actions';
import { connect } from 'react-redux';

class App extends Component {

//   constructor(props) {
//     super(props);

//     const { dispatch } = this.props;
//     history.listen((location, action) => {
//         // clear alert on location change
//         dispatch(alertActions.clear());
//     });
// }

  render() {
    // const { alert } = this.props;
    return (
     
     <div className="App">
       

<Router history={history}>
    <div >
      <Header />
      <Switch>
      <Route exact path='/' component={ Home } />
      <PrivateRoute exact path="/parks" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />

      {/* <Route  path='/*' render={() => ( <Redirect to='/' />)} /> */}
      </Switch>
    </div>
    </Router>
    </div>

    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App }; 
export default App;