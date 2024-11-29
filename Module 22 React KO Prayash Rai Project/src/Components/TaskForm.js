import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import { FcAddImage } from "react-icons/fc";
import "react-datepicker/dist/react-datepicker.css";
import tags from "../data/tags.json";
import { Formik, Form, Field } from "formik";

const TaskForm = ({
  modal,
  toggle,
  onCreate,
  task: taskData,
  defaultTask,
  type = "Create",
  onUpdate,
}) => {
  const [task, setTask] = useState({ ...defaultTask, id: uuidv4() });

  const [initialValues, setInitialValues] = useState({
    task: "",
    desc: "",
    deadline: "",
    isPriority: false,
    tags: [],
    image: "",
  });

  const handleSave = (e) => {
    e.preventDefault();
    type === "Create" ? onCreate(task) : onUpdate(task, task.id);
    toggle();
  };
  useEffect(() => {
    if (taskData) {
      setTask(taskData);
    }
  }, [taskData]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSave}>
      {(props) => (
        <Form>
          <div className={`modal ${modal ? "open" : ""}`} id="modal">
            <div className="modal-content">
              <button
                onClick={toggle}
                className="modal-close button"
                title="Close Modal"
              >
                x
              </button>
              <h3>{type} Task</h3>
              <div className="modal-area">
                <div className="modal-body">
                  <div className="modal-form">
                    <div className="form-group">
                      <label htmlFor={`title-${task.id}`}> Task </label>
                      <Field id={`title-${task.id}`} type="text" name="task" />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`deadline-${task.id} `}>Deadline</label>
                      <DatePicker
                        id={`deadline-${task.id}`}
                        selected={
                          task.deadline ? new Date(task.deadline) : null
                        }
                        onChange={(date) =>
                          props.setFieldValue("deadline", date)
                        }
                        showTimeSelect
                        dateFormat="Pp"
                        todayButton="Today"
                        value={task.deadline ? new Date(task.deadline) : null}
                      />
                    </div>
                    <div className="form-group">
                      <label for={`description-${task.id}`}>Description</label>
                      <Field
                        type="textarea"
                        id={`description-${task.id}`}
                        name="desc"
                      />
                    </div>
                    <div className="form-group priority-input-container">
                      <label for={`priority-${task.id}`}>
                        <Field
                          type="checkbox"
                          id={`priority-${task.id}`}
                          name="priority"
                          checked={task.priority}
                        />
                        Priority
                      </label>
                    </div>
                    <div className="form-group">
                      <label for={`tags-${task.id}`}>Tags</label>
                      <div>
                        <Select
                          id={`tags-${task.id}`}
                          options={tags.map((tag) => ({
                            value: tag.name,
                            label: tag.name,
                            ...tag,
                          }))}
                          isMulti
                          onChange={(selectedOption) =>
                            setTask((prev) => ({
                              ...prev,
                              tags: selectedOption.map(({ id, name }) => ({
                                id,
                                name,
                              })),
                            }))
                          }
                          value={task.tags.map((tag) => ({
                            value: tag.name,
                            label: tag.name,
                            ...tag,
                          }))}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      Image
                      <label
                        for={`image-${task.id}`}
                        className="iamge-input-label"
                      >
                        {task.image.length > 0 ? (
                          <img src={task.image} alt="" width="200" />
                        ) : (
                          <FcAddImage fontSize={50} />
                        )}
                      </label>
                      <Field
                        id={`image-${task.id}`}
                        className="input-iamge"
                        name="image"
                        accept="image/*"
                        type="file"
                      />
                    </div>
                  </div>
                  <footer>
                    <button className="button primary" type="submit">
                      {type === "Create" ? "Create" : "Update"}
                    </button>
                    <button className="button secondary" onClick={toggle}>
                      Cancel
                    </button>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;




// import React from "react";
// import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import Select from "react-select";
// import { v4 as uuidv4 } from "uuid";
// import { FcAddImage } from "react-icons/fc";
// import "react-datepicker/dist/react-datepicker.css";
// import tags from "../data/tags.json";
// import { Formik, Form, Field } from "formik";

// const TaskForm = ({
//   modal,
//   toggle,
//   onCreate,
//   task: taskData,
//   defaultTask,
//   type = "Create",
//   onUpdate,
// }) => {
//   const [task, setTask] = useState({ ...defaultTask, id: uuidv4() });

//   const [initialValues, setInitialValues] = useState({
//     task: "",
//     desc: "",
//     deadline: "",
//     isPriority: false,
//     tags: [],
//     image: "",
//   });

//   const handleSave = (e) => {
//     e.preventDefault();
//     type === "Create" ? onCreate(task) : onUpdate(task, task.id);
//     toggle();
//   };
//   useEffect(() => {
//     if (taskData) {
//       setTask(taskData);
//     }
//   }, [taskData]);

//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSave}>
//       {(props) => (
//         <Form>
//           <div className={`modal ${modal ? "open" : ""}`} id="modal">
//             <div className="modal-content">
//               <button
//                 onClick={toggle}
//                 className="modal-close button"
//                 title="Close Modal"
//               >
//                 x
//               </button>
//               <h3>{type} Task</h3>
//               <div className="modal-area">
//                 <div className="modal-body">
//                   <div className="modal-form">
//                     <div className="form-group">
//                       <label htmlFor={`title-${task.id}`}> Task </label>
//                       <Field id={`title-${task.id}`} type="text" name="task" />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor={`deadline-${task.id} `}>Deadline</label>
//                       <DatePicker
//                         id={`deadline-${task.id}`}
//                         selected={
//                           task.deadline ? new Date(task.deadline) : null
//                         }
//                         onChange={(date) =>
//                           props.setFieldValue("deadline", date)
//                         }
//                         showTimeSelect
//                         dateFormat="Pp"
//                         todayButton="Today"
//                         value={task.deadline ? new Date(task.deadline) : null}
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label for={`description-${task.id}`}>Description</label>
//                       <Field
//                         type="textarea"
//                         id={`description-${task.id}`}
//                         name="desc"
//                       />
//                     </div>
//                     <div className="form-group priority-input-container">
//                       <label for={`priority-${task.id}`}>
//                         <Field
//                           type="checkbox"
//                           id={`priority-${task.id}`}
//                           name="priority"
//                           checked={task.priority}
//                         />
//                         Priority
//                       </label>
//                     </div>
//                     <div className="form-group">
//                       <label for={`tags-${task.id}`}>Tags</label>
//                       <div>
//                         <Select
//                           id={`tags-${task.id}`}
//                           options={tags.map((tag) => ({
//                             value: tag.name,
//                             label: tag.name,
//                             ...tag,
//                           }))}
//                           isMulti
//                           onChange={(selectedOption) =>
//                             setTask((prev) => ({
//                               ...prev,
//                               tags: selectedOption.map(({ id, name }) => ({
//                                 id,
//                                 name,
//                               })),
//                             }))
//                           }
//                           value={task.tags.map((tag) => ({
//                             value: tag.name,
//                             label: tag.name,
//                             ...tag,
//                           }))}
//                         />
//                       </div>
//                     </div>
//                     <div className="form-group">
//                       Image
//                       <label
//                         for={`image-${task.id}`}
//                         className="iamge-input-label"
//                       >
//                         {task.image.length > 0 ? (
//                           <img src={task.image} alt="" width="200" />
//                         ) : (
//                           <FcAddImage fontSize={50} />
//                         )}
//                       </label>
//                       <Field
//                         id={`image-${task.id}`}
//                         className="input-iamge"
//                         name="image"
//                         accept="image/*"
//                         type="file"
//                       />
//                     </div>
//                   </div>
//                   <footer>
//                     <button className="button primary" type="submit">
//                       {type === "Create" ? "Create" : "Update"}
//                     </button>
//                     <button className="button secondary" onClick={toggle}>
//                       Cancel
//                     </button>
//                   </footer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default TaskForm;


// import { Formik, Form, Field } from "formik";
// // import { FcAddImage } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";

// function TaskForm() {
//   let navigate = useNavigate();
//   function handleClick(e) {
//     navigate("/todoList", true);
//   }

//   return (
//     <Formik>
//       <Form>
//         <div className="main-container">
//           <header className="task-header">
//             <h3>Create Task</h3>
//           </header>
//           <div className="login-form">
//             <label>
//               <h4>Task</h4>
//               <Field type="text" />
//             </label>
//           </div>
//           <div className="login-form">
//             <label>
//               <h4> Deadline</h4>
//               <Field type="text" />
//             </label>
//           </div>

//           <div className="login-form">
//             <label>
//               <h4>Description</h4>
//               <Field type="textarea" />
//             </label>
//           </div>

//           <div className="priority">
//             <label>
//               <h4>Priority</h4>
//             </label>
//             <Field type="checkbox" />
//           </div>

//           <div className="login-form">
//             <label>
//               <h4>Tags</h4>
//             </label>
//             <select className="tags">
//               <option>Select the tags</option>
//             </select>
//           </div>

//           <div className="image-form">
//             <label>
//               <h4>Image</h4>
//             </label>
//           </div>
//           <Field name="image" type="file" value="" />
//           <div className="btn">
//             <button className="task-form-create" type="submit">
//               Create
//             </button>
//             <button
//               className="task-form-cancel"
//               type="submit"
//               onClick={handleClick}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </Form>
//     </Formik>
//   );
// }

// export default TaskForm;
