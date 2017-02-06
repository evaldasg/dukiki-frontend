import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-inverse bg-primary">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <a className="navbar-brand" href="/">
          <img src="/public/brand/dukiki_logo.png" width="30" height="30" className="d-inline-block align-top" alt="Dukiki Logo" />
          dukiki
        </a>
  
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/expenses' className="nav-link">Expenses</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
