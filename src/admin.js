import React, { Component } from 'react'
import Content from './content'
import './hours.css'

export default class Admin extends Component {
  render() {
    return (
      <Content className='Hours'>
        
        <h2>Admin Login</h2>
        <form>
          <label for="Username">Username</label>
          <input type="text" id="Username"></input>
          <label for="Password">Password</label>
          <input type="text" id="Password"></input>
        </form>

      </Content>
    )
  }
}