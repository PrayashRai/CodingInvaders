import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const InvalidAccess = () => {
    let location = useLocation();
  let navigate = useNavigate();
  function redirectLogin() {
    navigate("/login", true);
  }
  return (
    <>
      <p>"Invalid credential, Please verify your creds."</p>
      <form>
        <button onClick={redirectLogin} className="btn-log-back">
          Log back in
        </button>
      </form>
    </>
  );
};

export default InvalidAccess;
