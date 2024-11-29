import React, { useState } from "react";
import loginDetails from "../Components/LoginDetails.json";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {

  let location =useLocation();
  console.log(location.pathname);

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target[0].value)
    // console.log(e.target[0].value)
    console.log("checking");
    if (loginDetails.email === email && loginDetails.password === password) {
      // updateState(true);
      // console.log("true");
      navigate("/home", true)
    }
    else{
      navigate("/invalidAccess", true);
    }
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  return (
    <div>
      <div className="sub-heading">
        <h2 className="sub-heading">Login</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-box">
        <div>
          <label className="form-label-email">Email</label>
        </div>
        <input
          name="email"
          id="exampleInputEmail"
          className="form-control"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <div>
          <label className="form-label-password">Password</label>
        </div>
        <input
          name="password"
          id="exampleInputPassword"
          className="form-control"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
