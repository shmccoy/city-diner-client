import React, { Component } from "react";
import "./landingpage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h1>City Diner</h1>
        </header>
        <section className="landing">
          <p>
            A site for a Richmond, VA diner that serves Breakfast and Lunch.
            Click the logo to go to the home page. The Admin Login is only for
            the Manager.
          </p>
          <p>Username: dinermgr</p>
          <p>Password: cD2237!</p>
        </section>
      </div>
    );
  }
}
