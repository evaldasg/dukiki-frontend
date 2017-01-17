import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'

var page = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />

        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br/><br/>
            <h1 className="header center orange-text">dukikik app</h1>
            <div className="row center">
              <h5 className="header col s12 light">
                This is your personal best finance advisor app<br/>
                in the world.
              </h5>
            </div>
            <div className="row center">
              <a href="#" id="download-button" className="btn-large waves-effect waves-light orange">
                Learn more...
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

var pageFactory = React.createFactory(page)

ReactDOM.render(pageFactory(null), document.getElementById('app'))
