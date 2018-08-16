import React, { Component } from 'react';
import Map from './components/Map'
import MapParks from './components/MapParks'
import MapParkModel from '../models/MapParkModel'

class MapPage extends Component {

  constructor(){
    super()

    this.state = {
      mapParks : []
    }
    
  }

  componentDidMount(){ 
    MapParkModel.all().then(res => 
      this.setState({
        mapParks: res.data.features
      }) 
    )
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Map mapParks={this.state.mapParks} />
        </div>
        <div className="mapParkContainer">
          <h1>All San Francisco Parks: </h1>
          <MapParks mapParks={this.state.mapParks}/>
        </div>
      </div>
    );
  }
}

export default MapPage;
