import React from "react";
import { TaskViewCard } from "../components";

export const ViewTask = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px",
      }}
    >
      <TaskViewCard />
    </div>
  );
};
