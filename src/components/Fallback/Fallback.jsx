import React from "react";
import { Link } from "react-router-dom";

export const Fallback = () => {
  return (
    <div className="noDataFallback">
      <img alt="No Data found" src="/nodata.jpg" width="300px" height="80%" />
      <p>
        Please <Link to="/add">Add Task</Link> to get started
      </p>
    </div>
  );
};
