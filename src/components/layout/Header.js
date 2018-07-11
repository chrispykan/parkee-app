import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
            <div className="container">
            <Link  className="navbar-brand logo" to='/'>Parkee</Link>
            <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse" 
            data-target="#navcol-1" 
            >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse"
                    id="navcol-1">
                    <ul className="nav navbar-nav  ml-auto" >
                        <li role="presentation" className="nav-item">
                          <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li role="presentation" className="nav-item">
                          <Link className="nav-link" to='/map'>Map</Link>
                        </li>
                        <li role="presentation" className="nav-item" data-toggle="modal" data-target="#loginModal">
                          <Link className="nav-link" to='/login' >Login</Link></li>
                        <li role="presentation" className="nav-item" data-toggle="modal" data-target="#signupModal">
                          <Link className="nav-link" to='/signup'>Sign Up</Link></li>
                    </ul>  
                    <i className="far fa-user"></i>
                </div>
              
            </div>
        </nav>
    )
  }
}

export default  Header;