import React, { useState } from "react";
import Login from "./Components/Login";
import LoginStyle from "./Components/LoginStyle.css"
import ToDoList from "./Components/ToDoList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound";
import InvalidAccess from "./Components/InvalidAccess";
import Home from "./Components/Home"

function App() {
  const [loginState, setLoginState] = useState(false);

  return (
    <div className="main-container">
      <header className="">
        <h2 className="login-heading">Todo app</h2>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/invalidAccess" element={<InvalidAccess/>} />
          <Route />
        </Routes>
      </BrowserRouter>

      {/* {!loginState && <Login updateState={setLoginState} />}
       {loginState && <ToDoList />} */}
    </div>
  );
}

export default App;

// import Login from "./Login";
// import "./App.css";
// import "./LoginStyle.css";
// import { useState } from "react";
// import ToDoList from "./ToDoList";
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import NotFound from "./NotFound";

// function App() {
//   const [loginState, setLoginState] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login updateState={setLoginState} />} />
//         <Route path="/todoList" element={loginState ? <ToDoList /> : <Navigate to="/login" />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
