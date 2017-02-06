import React from 'react'
import MainLayout from './layout/MainLayout'

const HomePage = React.createClass({
  content () {
    return (
      <div className='container'>
        <br /><br />
        <h1 className='header center orange-text'>dukiki app</h1>
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
    )
  },
  
  render () {
    return (
      <div>
        <MainLayout component={ this.content() } />
      </div>
    )
  }
})

export default HomePage
