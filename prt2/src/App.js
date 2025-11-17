import React, { useState } from "react";
import "./App.css";

function RegistrationFunction() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!\n" + JSON.stringify(form));
  };

  return (
    <div className="formContainer">

      <h2 className="formTitle">Registration Form (Function Component)</h2>

      <div className="formBox">
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="inputBox"
            onChange={handleChange}
          /><br /><br />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="inputBox"
            onChange={handleChange}
          /><br /><br />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="inputBox"
            onChange={handleChange}
          /><br /><br />

          <button type="submit" className="btnClass">Register</button>
        </form>
      </div>

    </div>
  );
}

export default RegistrationFunction;
