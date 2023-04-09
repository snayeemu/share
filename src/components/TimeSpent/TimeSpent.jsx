import React from "react";

const TimeSpent = ({ timeSpent }) => {
  return (
    <div className="border border-2 border-primary text-center bg-secondary bg-opacity-10 rounded-3 ">
      <h6 className="px-2 py-2 text-primary">
        Spent time on read: {timeSpent} min
      </h6>
    </div>
  );
};

export default TimeSpent;
