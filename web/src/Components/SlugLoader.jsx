import React from "react";

const SlugLoader = () => {
  return (
    <div
      className="flex items-start gap-10 my-10 w-11/12 mx-auto"
      style={{ height: "calc(100vh - 20vh)" }}
    >
      <div className="w-2/5 h-4/5 bg-regal-blue animate-pulse rounded-lg"></div>
      <div className="w-3/5 flex flex-col gap-3">
        <div className="h-8 w-2/5 bg-regal-blue rounded-lg"></div>
        <div className="h-8 w-2/4 bg-regal-blue rounded-lg"></div>
        <div className="h-8 w-2/5 bg-regal-blue rounded-lg"></div>
        <div className="h-8 w-2/4 bg-regal-blue rounded-lg"></div>
      </div>
    </div>
  );
};

export default SlugLoader;
