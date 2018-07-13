import React, { Component } from 'react';
import ParkCards from './ParkCards';


 class Parks extends Component {
  render() {
    return (
        <div className="parksList">
          <h2>Here are some of our favourite parks</h2>
                <ParkCards />
      </div>
    )
  }
}


export default Parks