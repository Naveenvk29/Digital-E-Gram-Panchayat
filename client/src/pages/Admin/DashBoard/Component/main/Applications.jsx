import React from "react";

const Applications = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <h2>Applications</h2>
      <p className="text-3xl font-extrabold">{data?.length}</p>
    </div>
  );
};

export default Applications;
