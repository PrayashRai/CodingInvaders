function Tasks() {
  return (
    <div className="tasks">
      <h3>Tasks</h3>
      <div className="filters">
        <h4>Filters:</h4>
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
  );
}

export default Tasks;
