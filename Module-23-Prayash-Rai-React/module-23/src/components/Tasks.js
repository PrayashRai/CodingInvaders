import "./../styles/Tasks.css";

function Tasks() {

    return (
        <div className="tasks">
            <h2>Tasks</h2>
            <div className="filters">
                <span>Filters:</span>
                <div className="sort-filter">
                    <div className="sorting">
                        <small>By Status:</small>
                        <select>
                            <option>Select</option>
                        </select>
                    </div>
                    <div className="sorting">
                        <small>By Tags:</small>
                        <select>
                            <option>Select</option>
                        </select>
                    </div>
                    <div className="sorting">
                        <small>Sort By:</small>
                        <select>
                            <option>Select</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Tasks