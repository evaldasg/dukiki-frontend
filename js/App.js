import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import MainPage from './MainPage'
import Settings from './Settings'
import Profile from './Profile'
import Budgets from './Budgets'
import Expenses from './Expenses'
import ExpensesNew from './ExpensesNew'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={MainPage} />
          <Match exactly pattern='/profile' component={Profile} />
          <Match exactly pattern='/budgets' component={Budgets} />
          <Match pattern='/expenses' component={Expenses} />
          <Match pattern='/expenses_new' component={ExpensesNew} />
          <Match exactly pattern='/settings' component={Settings} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
