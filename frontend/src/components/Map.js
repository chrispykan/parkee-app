import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {

    let parkMarkers = this.props.mapParks.map( ( elem, parkid ) => 
      (
        <Marker key={parkid}
          title={elem.properties.parkname}
          name={elem.properties.parkname}
          position={{ 
            lat: elem.geometry.coordinates[1], 
            lng: elem.geometry.coordinates[0] 
          }}
        />
      )
    ) 

    return (
      <div className="mapContainer">
      <Map google={this.props.google}
      initialCenter={{
        lat: 37.78, 
        lng: -122.44
      }}
      style={{width: '50%', height: '80%'}}

      zoom={3}
      onClick={this.onMapClicked}>

      {parkMarkers}

      </Map>
      </div>
    );
  }
}
const LoadingContainer = (props) => (
  <div >
    <img src={'images/loading.gif'} alt="Loading..."/>
  </div>
)

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'),
  LoadingContainer: LoadingContainer

})(MapContainer)