import React from 'react'
import { Link } from 'react-router'
import NavBar from './NavBar'

const Budgets = React.createClass({
  render () {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='col s9'>
              <h3 className='header orange-text'>Monthly Budget</h3>
            </div>
            <div className='col s3'>
              <div className='expenses new-button'>
                <Link to='/budgets_new' className='expenses-new waves-effect waves-light btn-large right light-blue darken-2'>
                  <i className='material-icons left'>add_circle</i>New
                </Link>
              </div>
            </div>
          </div>
          <table className='bordered striped highlight responsive-table'>
            <thead>
              <tr>
                <th>Category</th>
                <th>Budget</th>
                <th>Actual</th>
                <th>Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Auto</td>
                <td>150.00 e</td>
                <td>100.00 e</td>
                <td>50.00 e</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})

export default Budgets
