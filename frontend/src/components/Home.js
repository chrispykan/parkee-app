import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
         
      <div className="landingSection">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active">
                <div className="hero-text">
                  <h1>Welcome to <br/> Parkee</h1>
                </div>
                <img className="d-block w-100" src="./images/landDolores.jpg" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <div className="hero-text">
                  <h1>Welcome to <br/> Parkee</h1>
                </div>
                <img className="d-block w-100" src="./images/landBike.jpg" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <div className="hero-text">
                  <h1>Welcome to <br/> Parkee</h1>
                </div>
                <img className="d-block w-100" src="./images/landBuena.jpg" alt="Third slide"/>
              </div>
              
            </div>
            </div>
          </div>
          
        </div>
      </div>

    )
  }
}

export default Home