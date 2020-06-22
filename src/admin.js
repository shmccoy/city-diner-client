import React, { Component } from "react";

import TokenService from "./services/token-service";
import AuthApiService from "./services/auth-api-service";
import "./admin.css";

export default class Admin extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
    location: {},
    history: {
      push: () => {},
    },
  };

  state = { error: null };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/dashboard";
    history.push(destination);
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const user_name = ev.target.elements[0].value;
    const password = ev.target.elements[1].value;

    AuthApiService.postLogin({
      user_name: user_name,
      password: password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <form onLoginSuccess={this.handleLoginSuccess} className="login">
          <h2>Admin Login</h2>

          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="form-group">
            <label htmlFor="user_name">User name</label>
            <input
              type="text"
              className="login__control"
              name="user_name"
              id="user_name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="login__control"
              name="password"
              id="password"
            />
          </div>

          <div
            onClick={this.handleSubmitJwtAuth}
            className="login__button__group"
          >
            <button type="submit" className="login__button">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
