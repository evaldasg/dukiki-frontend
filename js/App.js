import React from 'react'
import { Route } from 'react-router'
import Expenses from './Expenses'
import HomePage from './HomePage'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Route exactly pattern='/' component={HomePage} />
        <Route exactly pattern='/expenses' component={Expenses} />
      </div>
    )
  }
})

export default App
