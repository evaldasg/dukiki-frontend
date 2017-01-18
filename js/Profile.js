import React from 'react'
import NavBar from './NavBar'

const Profile = React.createClass({
  render () {
    return (
      <div>
        <NavBar />

        <div className='section no-pad-bot' id='index-banner'>
          <div className='container'>
            <br /><br />
            <h1 className='header center orange-text'>Users's profile page</h1>
            <div className='row center'>
              <h5 className='header col s12 light'>
                This is your personal best finance advisor app<br />
                in the world.
              </h5>
            </div>
            <div className='row center'>
              <a href='#' id='download-button' className='btn-large waves-effect waves-light orange'>
                Learn more...
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Profile
