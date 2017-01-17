import React from 'react'

var NavBar = React.createClass({
  render: function () {
    return (
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">Dukikik</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Budgets</a></li>
            <li><a href="#">Expenses</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Budgets</a></li>
            <li><a href="#">Expenses</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
  }
})

export default NavBar
