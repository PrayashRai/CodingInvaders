import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Task from "./Task";
import Logout from "./Logout";

const TaskSchema = Yup.object().shape({
  task: Yup.string().required("Task is required"),
});

function TodoList() {
  const [tasks, setTasks] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();
  console.log(location.pathname);

  const handleClick = (e) => {
    navigate("/TaskForm", true);
  };

  const [initiaFormValues] = useState({
    task: "",
  });
  const handleTaskCompletion = (task) => {
    setTasks(
      tasks.map((t) => (t === task ? { ...t, completed: !t.completed } : t))
    );
  };
  const handleFormSubmit = async (values) => {
    setTasks([...tasks, { text: values.task, completed: false }]);

    values.task = "";
    console.log(values);
  };

  return (
    <div>
      <Formik
        validationSchema={TaskSchema}
        onSubmit={handleFormSubmit}
        initialValues={initiaFormValues}
      >
        {({ errors, touched }) => (
          <Form className="main-container">
            <div>
              <Logout />
              <div className="app-title">
                <h3>Todo</h3>
              </div>

              <div className="task-input-container">
                <label>
                  <Field
                    type="textarea"
                    name="task"
                    placeholder="Add task todo..."
                  />
                </label>
                <button type="submit">Create Task</button>
              </div>
              {errors.task && touched.task ? <div>{errors.task}</div> : ""}
              <div className="task-input-container">
                <button type="submit" onClick={handleClick}>
                  create detailed task
                </button>
              </div>
              <div>
                <Task />
              </div>
              <div>
                <div className="tasks-container-header">
                  <h3>Overdue Tasks</h3>
                  {tasks
                    .filter((task) => !task.completed)
                    .map((task) => (
                      <div key={task.text}>
                        <input
                          type="radio"
                          checked={task.completed}
                          onChange={() => handleTaskCompletion(task)}
                        />
                        <label>{task.text}</label>
                      </div>
                    ))}
                </div>
                <div className="tags-container-header ">
                  <label>
                    <h3>
                      {" "}
                      <input type="radio" /> Task with tags
                    </h3>
                    <div className="tags">
                      <h6>Important</h6>
                      <h6>Work</h6>
                    </div>
                    <h3>
                      {" "}
                      <input type="radio" />
                      Task with deadline
                    </h3>
                  </label>
                </div>
                <div className="tasks-container-header">
                  <h3>Completed Tasks</h3>
                  {tasks
                    .filter((task) => task.completed)
                    .map((task) => (
                      <div key={task.text}>
                        <label>
                          <Field className="field-task" type="radio" />
                          <del>
                            <h3>{task.text}</h3>
                          </del>
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TodoList;

// const redirectLogin = () => {
//     navigate("/login", true)
//     }

//     <button onClick={redirectLogin}>Logout</button>
