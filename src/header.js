import React, { Component } from 'react'
import Content from './content'

export default class Header extends Component {
  render() {
    return (
      <Content className='Header'>
        <h1>City Diner</h1>
      </Content>
    )
  }
}