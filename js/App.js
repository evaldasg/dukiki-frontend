import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import MainPage from './MainPage'
import Settings from './Settings'
import Profile from './Profile'
import Categories from './Categories'
import CategoriesNew from './CategoriesNew'
import Budgets from './Budgets'
import BudgetsNew from './BudgetsNew'
import Expenses from './Expenses'
import ExpensesNew from './ExpensesNew'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={MainPage} />
          <Match exactly pattern='/categories' component={Categories} />
          <Match pattern='/categories_new' component={CategoriesNew} />
          <Match exactly pattern='/profile' component={Profile} />
          <Match exactly pattern='/budgets' component={Budgets} />
          <Match pattern='/budgets_new' component={BudgetsNew} />
          <Match pattern='/expenses' component={Expenses} />
          <Match pattern='/expenses_new' component={ExpensesNew} />
          <Match exactly pattern='/settings' component={Settings} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
