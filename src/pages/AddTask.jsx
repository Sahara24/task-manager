import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../reduxSlices/taskSlice";
import { TaskForm, Toaster } from "../components";
import Snackbar from "@mui/material/Snackbar";

const defaultValues = {
  title: "",
  description: "",
  dueDate: "",
};

export const AddTask = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(addTask(data));
    setOpen(true);
  };

  return (
    <div>
      <TaskForm submitFun={handleSubmit} defaultValues={defaultValues} />
      <Snackbar open={open} autoHideDuration={6000} message="Note archived" />
      <Toaster msg="Task Added Successfully" severity="success" open={open} />
    </div>
  );
};
