import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import MainPage from './MainPage'
import Profile from './Profile'
import Budgets from './Budgets'
import Expenses from './Expenses'
import Settings from './Settings'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={MainPage} />
          <Match exactly pattern='/profile' component={Profile} />
          <Match exactly pattern='/budgets' component={Budgets} />
          <Match pattern='/expenses' component={Expenses} />
          <Match exactly pattern='/settings' component={Settings} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
