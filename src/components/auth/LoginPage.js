import React, { Component } from 'react';  
import OktaSignIn from '@okta/okta-signin-widget';

 class LoginPage extends Component{
  constructor(){
    super();
    this.widget = new OktaSignIn({
      baseUrl: 'https://{oktaOrgUrl}',
      clientId: '0oafpfjsljsrjec6v0h7',
      redirectUri: 'http://localhost:3000',
      authParams: {
        responseType: 'id_token'
      }
    });
  }

  render(){
    return(
      <div>Login Page</div>
    );
  }
}

export default LoginPage