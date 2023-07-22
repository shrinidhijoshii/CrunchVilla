import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
    // below hook return object , it will capture if there are any error
    const err = useRouteError()
  return (
    <Fragment>
      <h1>oops someting went wrong...</h1>
      <p>{err.status}: {err.statusText}</p>
    </Fragment>
  );
};
