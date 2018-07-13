import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li key={1} role="presentation" className="nav-item">
          <Link className="nav-link" to='/parks'>Parks</Link>
        </li>,
        <li key={2} role="presentation" className="nav-item">
        <Link className="nav-link" to='/map'>Map</Link>
      </li>,
        <li key={3} role="presentation" className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>,
        <li key={4} role="presentation" className="nav-item">
          <Link className="nav-link" to='/profile'><i className="far fa-user"></i></Link>
        </li>
      //    <li key={5} className="nav-item">
      //    <Link className="nav-link" to="/feature">Protected Site</Link>
      //  </li>

      ]
    } else {
      return [
       
        <li key={1} role="presentation" className="nav-item">
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li key={2} role="presentation" className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>,
        // <li key={4} className="nav-item">
        //   <Link className="nav-link" to="/feature">Protected Site</Link>
        // </li>
      ]
    }
  }

  render() {
    return (
      
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar ">
        <Link className="navbar-brand logo" to='/'>Parkee</Link>
            <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse" 
            data-target="#navcol-1" 
            >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            </button>
        
        
        
        <ul className="nav navbar-nav">
        <li role="presentation" className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
          {this.renderLinks()}
        </ul>
      </nav>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps,)(Header)