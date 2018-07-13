import React, { Component } from 'react'

class ParkSection extends Component {
  render() {
    return (
      <div className="tidbit-section">
        <h1>Park</h1>

        <div className="block-content">
        <div className="park-info">
        <div className="row">
        <div className="col-md-6">
            <div className="gallery">
                <img className="img-fluid d-block mx-auto" src="./images/alamo.jpg" />
            </div>
        </div>
        <div className="col-md-6">
            <div className="info">
                <h3>Alamo Square</h3>
                <div className="rating"><img src="./images/star.png" /><img src="./images/star.png" /><img src="./images/star.png" /><img src="./images/star.png" /><img src="./images/star.png" /></div>
                <div className="summary">
                    <p>Green space with a playground, tennis court & views of the city's iconic painted Victorian houses.</p>
                </div>
                <div className="points">
                    <p>Acarage: 12.7</p>
                    <p>District:  5</p>
                    <p>Address: Steiner St & Hayes Street, San Francisco, CA 94117</p>

                </div>
                
            </div>
        </div>
    </div>
</div>
</div>
</div>
     
    )
  }
}


export default ParkSection