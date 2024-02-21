import { Button, Checkbox, Chip, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./taskViewCard.css";
import { changeStatus } from "../../reduxSlices/taskSlice";

const textHeading = {
  fontSize: "19px",
  marginBottom: "8px",
  fontWeight: "600",
};

const textDescrition = { fontSize: "18px", lineHeight: "1.4" };

export const TaskViewCard = ({ task }) => {
  const [checked, setChecked] = useState(task.status === "Done");
  const tasks = useSelector((state) => state.tasks.tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = () => {
    navigate("/edit");
  };

  const handleBack = () => {
    navigate("/");
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
  return (
    <div className="taskViewCard">
      <div className="taskViewHeader">
        <h2>{task.title}</h2>
        <Chip
          label={checked ? "Done" : "Pending"}
          color={checked ? "success" : "warning"}
          variant="filled"
        />
      </div>
      <div className="taskViewDescrition">
        <p style={textHeading}>Description</p>
        <p style={textDescrition}>{task?.description}</p>
      </div>
      <div className="taskViewDescrition">
        <p style={textHeading}>Due Date</p>
        <p style={textDescrition}>{task?.dueDate}</p>
      </div>
      <div className="taskViewControlBlock">
        <div className="taskViewBtnWrapper">
          <Button color="inherit" variant="contained" onClick={handleBack}>
            BACK
          </Button>
          {/* <Button color="error" variant="contained">
            DELETE
          </Button> */}
        </div>
        <div className="taskViewBtnWrapper">
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
          {/* <Button color="primary" variant="contained" onClick={handleEdit}>
            EDIT
          </Button> */}
        </div>
      </div>
    </div>
  );
};
