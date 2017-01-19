import React from 'react'
import Expenses from './Expenses'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Expenses snapshot test', () => {
  const component = shallow(<Expenses />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
