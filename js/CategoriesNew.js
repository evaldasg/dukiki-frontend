import React from 'react'
import NavBar from './NavBar'
// import payload from '../data/categories'

const CategoriesNew = React.createClass({
  render () {
    return (
      <div>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <form className='col s6'>
              <div className='input-field col s12'>
                <input name='date' id='date' type='date' className='datepicker validate' />
                {/* <label htmlFor='date'>Date</label> */}
              </div>
              <div className='input-field col s12'>
                <input name='description' id='description' type='text' className='validate' />
                <label htmlFor='description'>Description</label>
              </div>
              <div className='input-field col s12'>
                <input name='amount' id='amount' type='number' className='validate' />
                <label htmlFor='amount'>Amount</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

export default CategoriesNew
