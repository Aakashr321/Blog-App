import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="childContainer">
        <h1>Oops!</h1>
        <p>404-page not found!</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Click! To redirect back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
