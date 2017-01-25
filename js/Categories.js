import React from 'react'
import { Link } from 'react-router'
import NavBar from './NavBar'

const Categories = React.createClass({
  render () {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='col s9'>
              <h3 className='header orange-text'>Expenses Categories</h3>
            </div>
            <div className='col s3'>
              <div className='expenses new-button'>
                <Link to='/categories_new' className='expenses-new waves-effect waves-light btn-large right light-blue darken-2'>
                  <i className='material-icons left'>add_circle</i>New
                </Link>
              </div>
            </div>
          </div>
          <table className='bordered striped highlight responsive-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Auto</td>
                <td>Auto expenses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})

export default Categories
