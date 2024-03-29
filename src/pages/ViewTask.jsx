import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { TaskViewCard } from "../components";
import { selectTasks } from "../reduxSlices/taskSlice";

export const ViewTask = () => {
  const location = useLocation();
  const tasks = useSelector(selectTasks);
  const taskToView = tasks.filter((task) => task.id === location.state.task_id);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px",
      }}
    >
      <TaskViewCard task={taskToView?.[0]} />
    </div>
  );
};
