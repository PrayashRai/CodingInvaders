import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import LoginDetails from "./LoginDetails.json";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("email type invalid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, `Password needs to be a min of 6 chars`)
    .max(12, `Password too long!`),
});

function Login() {
  let navigate = useNavigate();

  const [ininitaFormValues] = useState({
    email: "test@gmail.com",
    password: "password",
  });

  const { email, password } = ininitaFormValues;

  const handleFormSubmit = async (values) => {
    if (
      values.email === LoginDetails.email &&
      values.password === LoginDetails.password
    ) {
      navigate("/todoList", true);
      console.log("checking");
    } else {
      navigate("/invalidAccess", true);
      console.log("true");
    }
    console.log();
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={ininitaFormValues}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="main-container">
            <Header />

            <div className="app-title">
              <h3>Todo</h3>
            </div>
            <div className="login-form">
              <div>
                <label>
                  Email
                  <Field type="email" name="email" />
                </label>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>

              <div>
                <label>
                  Password
                  <Field type="password" name="password" />
                </label>
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>
              <button type="submit">Login</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default Login;
