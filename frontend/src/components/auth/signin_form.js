import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { renderTextField } from './form_helpers'
import RaisedButton from 'material-ui/RaisedButton'


class SigninForm extends Component {


  


  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oh,no! </strong>{this.props.errorMessage}
      </div>
    }
  }

  render() {
    const {handleSubmit} = this.props
  
    return (
      <div>
        {this.renderAlert()}
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>

          <Field
            label="Email"
            name="email"
            component={renderTextField}
            type="text"/>

          <Field
            label="Password"
            name="password"
            component={renderTextField}
            type="password"/>

          <RaisedButton type="submit" label="Sign In" primary={true} labelColor={'#FFFFFF'}/>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signin'
})(SigninForm)
