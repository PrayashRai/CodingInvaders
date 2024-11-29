import React from "react";
import { useNavigate } from "react-router-dom";

const InvalidAccess = () => {
  let navigate = useNavigate();
  const redirectLOgin = () => {
    navigate("/login", true);
  };

  return (
    <div className="main-container">
      <div className="app-title">
        <h3>Todo</h3>
      </div>
      <div className="not-found-message ">
      <p>Invalid credientials, Please verify your creds.</p>
      <form>
        <button onClick={redirectLOgin}>Log Back In</button>
      </form>
      </div>
      
    </div>
  );
};

export default InvalidAccess;
