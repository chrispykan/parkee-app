import React, { Component } from 'react';
import { Link } from 'react-router-dom';


  class Header extends Component {

    render() {


    return (
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
            <div className="container">
            <a className="navbar-brand logo" to='/'>Parkee</a>
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

                      <li role="presentation" className="nav-item">
                        <Link className="nav-link" to='/login' onClick={this.login} >Login</Link>
                      </li>
                      <li role="presentation" className="nav-item">
                        <Link className="nav-link" to='/register' onClick={this.register}> Register</Link>
                      </li>
                    </ul>  
                    <Link to='/profile'><i className="far fa-user"></i></Link>
                </div>
              
            </div>
        </nav>
    );
    }
  }


export default Header;