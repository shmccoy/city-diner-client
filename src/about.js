import React, { Component } from "react";

import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <h2>About</h2>
        <img
          className="outside-img"
          src="https://scontent.fric1-2.fna.fbcdn.net/v/t31.0-8/259448_110793205682421_2470524_o.jpg?_nc_cat=106&_nc_sid=174925&_nc_ohc=8GXKWtMZFdwAX_j806C&_nc_ht=scontent.fric1-2.fna&oh=3730015079ec5bd1d5e8a8823f25811b&oe=5F0A91BF"
          alt="Diner from Outside"
        />
        <p>
          Richmond's favorite diner! Mayors, coaches, construction workers,
          students and everyone else loves to grab great comfort food at the
          City Diner!
        </p>
      </div>
    );
  }
}
