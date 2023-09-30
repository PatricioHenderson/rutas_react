import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <div>Error404</div>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Error404;
