import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TaskForm } from "../components";
import { updateTask } from "../reduxSlices/taskSlice";
import toast from "react-hot-toast";

export const EditTask = () => {
  const location = useLocation();
  const tasks = useSelector((state) => state?.tasks?.tasks);
  const currentTask = tasks?.filter(
    (item) => item.id === location?.state?.task_id
  );
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    const payload = {
      tasks: tasks,
      updatedTask: data,
    };
    dispatch(updateTask(payload));
    toast.success("Task update successful");
  };
  const defaultValues = currentTask?.[0];

  return (
    <div>
      <TaskForm submitFun={handleSubmit} defaultValues={defaultValues} />
    </div>
  );
};
