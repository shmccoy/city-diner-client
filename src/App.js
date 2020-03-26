import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Nav from './nav'
import Header from './header'
import Footer from './footer'
import Home from './home'
import Menu from './menu'
import About from './about'
import Admin from './admin'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Route path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/about' component={About} />
          <Route path='/admin' component={Admin} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      </BrowserRouter>
    )
  }
}