import React, { Component } from 'react'
import MapPark from './MapPark'
class MapParks extends Component {
  
  numToColor(num){
    return num >= 6 ? 'purple':
      num >= 5 ? 'red':
        'orange'
  }

  render(){
    let mapParksList = this.props.mapParks.map( (elem, idx) =>{

      return <MapPark  shake={elem.properties.mag >= 6} color={this.numToColor(elem.properties.mag)} key={idx} mag={elem.properties.mag} title={elem.properties.title}  
      /> 
    })
    
    return  (
      <div>
        <ul>
          {mapParksList}
        </ul>
      </div>
    )
  }
}

export default MapParks