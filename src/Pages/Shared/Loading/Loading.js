import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <span>L</span>
      <svg
        className="spinner-border animate-spin h-5 w-5 mr-3 border-ra bg-slate-500 border-r-8"
        viewBox="0 0 24 24"
      ></svg>
      <span>ading...</span>
    </div>
  );
};

export default Loading;
