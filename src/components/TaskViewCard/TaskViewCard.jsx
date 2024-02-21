import { Button, Checkbox, Chip, FormControlLabel } from "@mui/material";
import "./taskViewCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const textHeading = {
  fontSize: "19px",
  marginBottom: "8px",
  fontWeight: "600",
};

const textDescrition = { fontSize: "18px", lineHeight: "1.4" };

export const TaskViewCard = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit");
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="taskViewCard">
      <div className="taskViewHeader">
        <h2>Title</h2>
        <Chip
          label={checked ? "Done" : "Pending"}
          color={checked ? "success" : "warning"}
          variant="filled"
        />
      </div>
      <div className="taskViewDescrition">
        <p style={textHeading}>Description</p>
        <p style={textDescrition}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          obcaecati atque dolor earum dignissimos a reiciendis iure ea
          laboriosam harum, temporibus nam vero fugit nostrum aperiam deserunt
          nesciunt pariatur voluptas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis amet odio molestiae minus, quas, est
          cumque aliquam perspiciatis ad deleniti aut laudantium, repellendus
          quam! Eaque corrupti obcaecati distinctio tempora beatae? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Alias obcaecati atque
          dolor earum dignissimos a reiciendis iure ea laboriosam harum,
          temporibus nam vero fugit nostrum aperiam deserunt nesciunt pariatur
          voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis amet odio molestiae minus, quas, est cumque aliquam
          perspiciatis ad deleniti aut laudantium, repellendus quam! Eaque
          corrupti obcaecati distinctio tempora beatae? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Alias obcaecati atque dolor earum
          dignissimos a reiciendis iure ea laboriosam harum, temporibus nam vero
          fugit nostrum aperiam deserunt nesciunt pariatur voluptas. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Reiciendis amet odio
          molestiae minus, quas, est cumque aliquam perspiciatis ad deleniti aut
          laudantium, repellendus quam! Eaque corrupti obcaecati distinctio
          tempora beatae?
        </p>
      </div>
      <div className="taskViewDescrition">
        <p style={textHeading}>Due Date</p>
        <p style={textDescrition}>24-12-2024</p>
      </div>
      <div className="taskViewControlBlock">
        <div className="taskViewBtnWrapper">
          <Button color="inherit" variant="contained" onClick={handleBack}>
            BACK
          </Button>
          <Button color="error" variant="contained">
            DELETE
          </Button>
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
          <Button color="primary" variant="contained" onClick={handleEdit}>
            EDIT
          </Button>
        </div>
      </div>
    </div>
  );
};
