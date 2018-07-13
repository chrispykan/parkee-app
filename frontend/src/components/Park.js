import React, { Component } from 'react'
import TidbitSection from './TidbitSection';
import ParkSection from './ParkSection';



class Park extends Component {
  render () {
    return (
      <div className="park-page">
        <ParkSection />
        <TidbitSection />
      </div>
    )
  }
}

export default Park


