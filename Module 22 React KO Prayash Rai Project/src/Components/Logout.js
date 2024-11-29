import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

function Logout() {
    let navigate = useNavigate();
    const redirectLogin = () => {
      navigate("/Login", true);
    }
    
      return (
      <Formik>
        <Form className="auth-status-message">
        <label>
          <p>Welcome test@gmail.com!  <button onClick={redirectLogin}>Logout</button></p>
         
     </label>
        </Form>
      </Formik>
  );
}
export default Logout;
