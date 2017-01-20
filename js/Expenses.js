import React from 'react'
import NavBar from './NavBar'
import payload from '../data/expenses'

const Expenses = React.createClass({
  sortPayload (prop) {
    return payload.expenses.sort((first, second) => {
      return new Date(second[prop]) - new Date(first[prop])
    })
  },

  render () {
    console.log(this.props)
    let sortedPayload = this.sortPayload('date')
    console.log(sortedPayload)

    return (
      <div>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='col s9'>
              <h3 className='header orange-text'>Monthly Expenses</h3>
            </div>
            <div className='col s3'>
              <div className='expenses new-button'>
                <a className='expenses-new waves-effect waves-light btn-large right light-blue darken-2'>
                  <i className='material-icons left'>add_circle</i>New
                </a>
              </div>
            </div>
          </div>
          <table className='bordered striped highlight responsive-table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                sortedPayload.map((element) => {
                  return (
                    <tr key={element.id}>
                      <td>{element.date}</td>
                      <td>{element.description}</td>
                      <td>{element.category.name}</td>
                      <td>{element.amount}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})

export default Expenses
