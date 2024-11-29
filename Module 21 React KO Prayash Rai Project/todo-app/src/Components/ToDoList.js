import { useLocation, useNavigate } from "react-router-dom"


function TodoList (){
    let location=useLocation();
    let navigate = useNavigate();

    console.log(location.pathname);

    const logout = ()=> {
        navigate("/login", true)
    }
    
    return(
        
<div><p>"Todo List Component."</p>
    <button onClick={logout} className="btn">Logout</button>
</div>
    )
    
}

export default TodoList