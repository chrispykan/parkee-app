import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTidbit} from '../actions/tidbitActions';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

class TidbitForm extends Component {
  state = {
    newTidbit: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ newTidbit: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTidbit(this.state.newTidbit)
    this.setState({ newTidbit: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.newTidbit}
        />
        <Button>Add Tidbit</Button>
      </form>
    )
  }

}

export default connect(null, { addTidbit })(TidbitForm)