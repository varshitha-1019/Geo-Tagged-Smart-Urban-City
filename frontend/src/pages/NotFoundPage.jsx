import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;