import React, { Component } from 'react'
import Content from './content'
import './about.css'

export default class About extends Component {
  render() {
    return (
      <Content className='About'>
        <h2>About</h2>
        <p>
        Richmond's favorite diner! Mayors, coaches, construction workers, students and everyone else loves to grab great comfort food at the City Diner!
        </p>
      </Content>
    )
  }
}