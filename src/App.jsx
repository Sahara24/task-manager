import { Link } from "react-router-dom";
import "./App.css";
import { TaskCard } from "./components";
import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <div className="app">
      <div className="header">
        {tasks ? <h1>Tasks List</h1> : <p>No Tasks available</p>}
        <Link className="addTaskBtn" to="/add">
          Add a Task
        </Link>
      </div>

      <div className="tasksWrapper">
        {tasks?.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
