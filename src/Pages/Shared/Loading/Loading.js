import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <span>L</span>
      <svg
        className="spinner-border animate-spin rounded-lg h-5 w-5 mr-3 border-dashed bg-slate-500 border-r-8"
        viewBox="0 0 24 24"
      ></svg>
      <span>ading...</span>
    </div>
  );
};

export default Loading;
