import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Fallback, TaskCard } from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTasks,
  selectFilteredTasks,
  selectTasks,
} from "./reduxSlices/taskSlice";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./App.css";

function App() {
  const filteredTasks = useSelector(selectFilteredTasks);
  const tasks = useSelector(selectTasks);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/add");
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
    const payload = {
      tasks: tasks,
      status: event.target.value,
    };

    dispatch(filterTasks(payload));
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="taskListText">Tasks List</h1>
        <div className="taskFilterWrapper">
          <FormControl
            sx={{ m: 1, minWidth: 120, borderColor: "white" }}
            size="small"
          >
            <InputLabel sx={{ color: "white" }} id="demo-select-small-label">
              Filter
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Filter"
              onChange={handleChange}
              sx={{ color: "white" }}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"pending"}>Pending</MenuItem>
              <MenuItem value={"done"}>Done</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleClick}
            variant="contained"
            size="small"
            color="info"
            sx={{ height: "40px" }}
          >
            ADD TASK
          </Button>
        </div>
      </div>

      <div className="tasksWrapper">
        {filter === "pending" || filter === "done" ? (
          filteredTasks?.length ? (
            filteredTasks?.map((task) => <TaskCard task={task} key={task.id} />)
          ) : (
            <Fallback />
          )
        ) : tasks?.length ? (
          tasks?.map((task) => <TaskCard task={task} key={task.id} />)
        ) : (
          <Fallback />
        )}
      </div>
    </div>
  );
}

export default App;
