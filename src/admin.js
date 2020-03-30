import React, { Component } from 'react'
import Content from './content'


export default class Admin extends Component {

  submitForm (e) {
		e.preventDefault()
    this.props.history.push('/dashboard');
  }

  render () {
    return (
      <Content>
      <form className="login">
        <h2>Admin Login</h2>
          
        <div className="form-group">
          <label htmlFor="username">User name</label>
          <input type="text" className="login__control"
            name="username" id="username"/>
        </div>
        <div className="form-group">
           <label htmlFor="password">Password</label>
           <input type="password" className="login__control"
            name="password" id="password"/>
        </div>
         
        <div onClick={this.submitForm.bind(this)} className="login__button__group">
         <button type="submit" className="login__button">
             Submit
         </button>
        </div>
      </form>
      </Content>
    )
  }
}