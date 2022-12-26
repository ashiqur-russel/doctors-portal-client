import React from "react";
import { useRouteError } from "react-router-dom";

const DisplayError = () => {
  const error = useRouteError();
  return (
    <div>
      <p className="text-danger">Something went wrong!</p>
      <h4>
        Please <button>Sign out</button> and Log Back in
      </h4>
      <p>Go ahead and email {error.data} if you feel like this is a mistake.</p>
    </div>
  );
};

export default DisplayError;
