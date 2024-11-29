import './../styles/Newtask.css';
import { Formik, Form, Field } from "formik";
import { Link, useParams } from "react-router-dom";

function Newtask() {

    const { tasktodo } = useParams();
    let { email } = useParams();
    return (
        <div className="main">
            <div className="task-container">
                <h3 className='formik-h3'>CREATE TASK</h3>
                <Formik className="formik">
                    <Form className="formik-form">
                        <div className='formik-fields'>
                            <label>Task:</label>
                            <Field name="task" type="text" value={tasktodo}  />
                        </div>
                        <div className='formik-fields'>
                            <label>Deadline:</label>
                            <Field  name="deadline" type="textarea" value=""  />
                        </div>
                        <div className='formik-fields'>
                            <label>Description:</label>
                            <Field  name="description" type="text" value=""  />
                        </div>
                        <div className='formik-checkbox'>
                            <label>Priority:</label>
                            <Field name="priority" type="checkbox" value="" />
                        </div>
                        <div className='formik-select'>
                            <label>Tags:</label>
                            <select>
                                <option>Select the tags</option>
                            </select>
                        </div>
                        <div className='formik-fields'>
                            <label>Image:</label>
                            <Field name="image" type="file" value="" />
                        </div>
                        
                        <div className='formik-btn'>
                            <button className='formik-btn-create'>Create</button>
                            <Link to={`/home/${email}`}>
                            <button className='formik-btn-cancel'>Cancel</button>
                            </Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )

}

export default Newtask;