import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home () {
    let navigate = useNavigate();
    let location = useLocation();

    const proceed = () => {
        navigate("/todoList", true)
    }
        return(
            <>
            <p>"Login Succesfull and Welcome."</p>
            <button onClick={proceed} className="proceed-todolist">Proceed to App</button>
            </>
        )
    }
   

export default Home