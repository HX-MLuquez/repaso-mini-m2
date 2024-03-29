import React, { useState } from "react";
import "./Login.css";

export default function Login({ loginAccess }) {
  const EMAIL = "mau@gmail.com";
  const PASSWORD = "@Model101";

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function validate(inputs) {
    const errors = {};
    if (!inputs.email) {
      errors.email = "debe ingresar un email";
    } else if (!inputs.password) {
      errors.password = "debe ingresar un password";
    }
    return errors;
  }

  function handleChange(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
      alert("Welcome to app Card Maker");
      loginAccess();
    }
  }
  return (
    <div className="container">
      <h1>CM</h1>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <div className="entry">
            <label>Email:</label>
          </div>
          <div className="entry">
            <input
              name="email"
              value={inputs.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="entry">
            <label>Password:</label>
          </div>
          <div className="entry">
            <input
              name="password"
              value={inputs.password}
              onChange={handleChange}
            ></input>
          </div>
          <hr></hr>
          <div className="entry">
            {Object.keys(errors).length === 0 ? (
              <button type="submit">Ingresar</button>
            ) : (
              <div>insert info</div>
            )}{" "}
          </div>
        </div>
      </form>
    </div>
  );
}