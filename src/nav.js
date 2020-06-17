import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
//import Content from './content'
import "./nav.css";

export default class Nav extends Component {
  state = {
    menu_class: "",
  };

  setToggleNavbarClass = () => {
    if (this.state.menu_class === "") {
      this.setState({
        menu_class: "toggled",
      });
    } else {
      this.setState({
        menu_class: "",
      });
    }
  };

  render() {
    let nav_bar_class = `nav-bar ${this.state.menu_class}`;
    return (
      <div className={nav_bar_class}>
        <Link className="logo" to="/">
          <img
            className="logo-pic"
            src="https://scontent.fric1-2.fna.fbcdn.net/v/t1.0-9/408596_358424574252615_1917522085_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=OrmLqrCVyPkAX-W3rrv&_nc_ht=scontent.fric1-2.fna&oh=fbef65801764b4076b5d12ac800d28f5&oe=5F0D34BD"
            alt="City Diner logo"
          />
        </Link>
        <section className="nav-links">
          <Link to="/menu" onClick={this.setToggleNavbarClass}>
            Menu
          </Link>
          <Link to="/about" onClick={this.setToggleNavbarClass}>
            About
          </Link>
          <Link to="/admin" onClick={this.setToggleNavbarClass}>
            Admin Login
          </Link>
        </section>
        <FontAwesomeIcon
          icon={faBars}
          className="nav-bar-icon"
          onClick={this.setToggleNavbarClass}
        />
      </div>
    );
  }
}
