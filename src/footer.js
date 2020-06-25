import React, { Component } from "react";
// import Content from './content'
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <h2>Location</h2>
            <p>2237 W Broad St,</p>
            <p>Richmond, VA 23220</p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>(804) 254-1974</p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-hours">
            <h2>Hours</h2>
            Open Daily 6:00am-2:30pm
          </p>
        </div>
      </div>
    );
  }
}
