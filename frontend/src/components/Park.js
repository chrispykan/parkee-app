import React, { Component } from 'react'
import Tidbits from './Tidbits'
import TidbitForm from './TidbitForm'

class Park extends Component {
  render () {
    return (
      <div className="tidbitSection">
        <h1>Tidbits about this Park!</h1>
        <TidbitForm />
        <Tidbits />
      </div>
    )
  }
}

export default Park


