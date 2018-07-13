import React, { Component } from 'react'
import Tidbits from './Tidbits'
import TidbitForm from './TidbitForm'

 class TidbitSection extends Component {
  render() {
    return (
      <div className="tidbit-section">
        <h2 className="title">Tidbits about this Park</h2>
          <Tidbits />
          <TidbitForm />
      </div>
    )
  }
}


export default TidbitSection