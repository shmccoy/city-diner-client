import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import Home from "./home";
import Menu from "./menu";
import About from "./about";
import Admin from "./admin";
import Dashboard from "./dashboard";
import PrivateRoute from "./Utilities/PrivateRoute";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;900&family=Roboto&display=swap"
            rel="stylesheet"
          />
          <nav>
            <Nav />
          </nav>
          <Switch>
            <main className="main">
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/about" component={About} />
              <Route path="/admin" component={Admin} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </main>
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
