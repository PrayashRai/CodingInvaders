import React from "react"
import { redirect, useNavigate } from "react-router-dom"

function NotFound(){
    let navigate = useNavigate();

    const redirectLogin = () => {
        navigate("/login", true);
    } 

    return (
        <>
        <p className="not-found-message">"Page you are looking for dosen't exist."</p>
        <button onClick={redirectLogin} className="btn-log-back"> Log back in</button>
        </>

    )
}

export default NotFound