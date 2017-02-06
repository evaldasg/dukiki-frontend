import React from 'react'
import NavBar from './NavBar'

class MainLayout extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        { this.props.component }
      </div>
    )
    
  }
}

export default MainLayout
