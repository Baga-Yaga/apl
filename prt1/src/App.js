import React, { Component } from "react";
import "./App.css";

class RegistrationClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!\n" + JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="formContainer">

        <h2 className="formTitle">Registration Form (Class Component)</h2>

        <div className="formBox">
          <form onSubmit={this.handleSubmit}>
            
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={this.handleChange}
              className="inputBox"
            /><br /><br />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
              className="inputBox"
            /><br /><br />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
              className="inputBox"
            /><br /><br />

            <button type="submit" className="btnClass">Register</button>
          </form>
        </div>

      </div>
    );
  }
}

export default RegistrationClass;
