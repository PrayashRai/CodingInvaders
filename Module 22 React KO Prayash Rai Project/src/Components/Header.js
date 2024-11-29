import React from "react";
import {useNavigate } from "react-router-dom";
import {Formik, Form, Field} from 'formik'

function Header() {
  let navigate = useNavigate();
const redirectLogin = () => {
  navigate("/Login", true);
}

  return (
  <Formik>
    <Form className="auth-status-message">
    <label>
      <p>You are not logged in.  <button onClick={redirectLogin}>Login</button></p>
     
 </label>
    </Form>
  </Formik>
  );
}
export default Header;
