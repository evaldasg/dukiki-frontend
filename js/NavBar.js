import React from 'react'
import { Link } from 'react-router'

var NavBar = React.createClass({
  render () {
    return (
      <nav className='light-blue lighten-1' role='navigation'>
        <div className='nav-wrapper container'>
          <Link to='/' id='logo-container' className='brand-logo'>dukiki</Link>
          <ul className='right hide-on-med-and-down'>
            <li><Link to='/categories'>Categories</Link></li>
            <li><Link to='/budgets'>Budgets</Link></li>
            <li><Link to='/expenses'>Expenses</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>

          <ul id='nav-mobile' className='side-nav'>
            <li><Link to='/categories'>Categories</Link></li>
            <li><Link to='/budgets'>Budgets</Link></li>
            <li><Link to='/expenses'>Expenses</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
          <a href='#' data-activates='nav-mobile' className='button-collapse'><i className='material-icons'>menu</i></a>
        </div>
      </nav>
    )
  }
})

export default NavBar
