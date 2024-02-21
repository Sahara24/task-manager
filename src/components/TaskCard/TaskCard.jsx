import React, { useState } from "react";
import "./taskCard.css";
import { Button, Checkbox, Chip, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const TaskCard = ({ task }) => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="taskCard">
      <div className="header">
        <Link to="/view" className="taskTitle">
          {task?.title}
        </Link>
        <div className="taskControlbar">
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
            style={{ marginLeft: "16px" }}
            variant="outlined"
            color="error"
            size="small"
          >
            Delete
          </Button>
          <Button
            style={{ marginLeft: "16px" }}
            variant="outlined"
            color="info"
            size="small"
          >
            EDIT
          </Button>
        </div>
      </div>
      <p className="taskDescrition">
        <span style={{ fontSize: "16px" }}>
          <strong>Description: </strong>
        </span>
        {task?.description}
      </p>
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
    </div>
  );
};
