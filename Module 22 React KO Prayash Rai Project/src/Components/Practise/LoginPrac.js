import { useState } from "react";

import LoginDetails from "../LoginDetails.json";
import { useLocation, useNavigate } from "react-router-dom";


function Login() {
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location);

  const [formData, setFormData] = useState({
    email: "test@gmail.com",
    password: "password",
  });

  const { email, password } = formData;

  function handleSubmit(e) {
    //preventing default behaviour of event
    e.preventDefault();
    // console.log(e)
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    console.log("checking");
    if (LoginDetails.email === email && LoginDetails.password === password) {
      // updateState(true);
      navigate("/Home", true);
      console.log("set to true");
    } else {
      navigate("/invalidAccess", true);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
