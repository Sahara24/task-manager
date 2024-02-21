import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../reduxSlices/taskSlice";
import { TaskForm } from "../components";
import toast from "react-hot-toast";

const defaultValues = {
  title: "",
  description: "",
  dueDate: "",
};

export const AddTask = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(addTask(data));
    toast.success("Task Added successfully");
  };

  return (
    <div>
      <TaskForm submitFun={handleSubmit} defaultValues={defaultValues} />
    </div>
  );
};
