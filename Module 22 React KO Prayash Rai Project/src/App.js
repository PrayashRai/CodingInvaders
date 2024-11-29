import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Notfound from "./Components/NotFound";
import TodoList from "./Components/TodoList";
import Task from "./Components/Task";
import TaskForm from "./Components/TaskForm";
import InvalidAccess from "./Components/InvalidAccess";

function App() {
  // const [loginState, setLoginState] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/invalidAccess" element={<InvalidAccess />} />
        <Route path="task" element={<Task />} />
        <Route path="taskForm" element={<TaskForm />} />
      </Routes>

      {/* {!loginState && <Login updateState={setLoginState} />}
     {loginState && <Home />} */}
    </div>
  );
}

export default App;
