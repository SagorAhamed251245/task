import React from "react";

const TimeLength = ({ time }) => {
  return (
    <div className={" time-length "}>
      <p className={"bg-red-200 px-2 py-1 rounded text-xs"}>{time}</p>
    </div>
  );
};

export default TimeLength;
