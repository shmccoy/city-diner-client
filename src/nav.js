import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import Content from './content'
import './nav.css'

export default class Nav extends Component {
    render() {
        return (
            <nav id="topNav">
              <Link to='/'>Home</Link>
              <Link to='/menu'>Menu</Link>
              <Link to='/about'>About</Link>
              <Link to='/admin'>Admin Login</Link>
            </nav>
        )
    }    
}