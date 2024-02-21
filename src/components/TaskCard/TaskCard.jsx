import React, { useState } from "react";
import { Button, Checkbox, Chip, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./taskCard.css";
import {
  changeStatus,
  deleteTask,
  selectTasks,
} from "../../reduxSlices/taskSlice";
import toast from "react-hot-toast";

export const TaskCard = ({ task }) => {
  const [checked, setChecked] = useState(task.status === "Done");
  const tasks = useSelector(selectTasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    const payload = {
      tasks: tasks,
      currentTaskId: task.id,
    };
    dispatch(deleteTask(payload));
    toast.success("Task deleted");
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    const payload = {
      tasks: tasks,
      currentTaskId: task?.id,
      status: event.target.checked ? "Done" : "Pending",
    };
    dispatch(changeStatus(payload));
  };

  const handleEdit = () => {
    navigate("/edit", { state: { task_id: task.id } });
  };

  const handleClick = () => {
    navigate("/view", { state: { task_id: task?.id } });
  };

  const controlButtons = (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Mark as Done"
      />
      <Button
        onClick={handleDelete}
        variant="outlined"
        color="error"
        size="small"
        sx={{ height: "32px" }}
      >
        Delete
      </Button>
      <Button
        onClick={handleEdit}
        variant="outlined"
        color="info"
        size="small"
        sx={{ height: "32px" }}
      >
        EDIT
      </Button>
    </>
  );

  return (
    <div className="taskCard">
      <div className="taskHeader">
        <h2 onClick={handleClick} className="taskTitle">
          {task?.title}
        </h2>
        <div className="taskControlbar">{controlButtons}</div>
      </div>
      <p className="taskDescrition">{task?.description}</p>
      <p className="dueDateDisplay">
        <span style={{ fontSize: "16px" }}>
          <strong>Due Date: </strong>
        </span>
        {task?.dueDate}
      </p>
      <div>
        <Chip
          label={checked ? "Done" : "Pending"}
          color={checked ? "success" : "warning"}
          variant="filled"
        />
      </div>
      <div className="mobileControlbar">{controlButtons}</div>
    </div>
  );
};
