import React, { Component } from 'react'
import Tidbits from './Tidbits'
import TidbitForm from './TidbitForm'

 class TidbitSection extends Component {
  render() {
    return (
      <div className="tidbit-section">
        <h1>Tidbits about this Park</h1>
          <Tidbits />
          <TidbitForm />
      </div>
    )
  }
}


export default TidbitSection