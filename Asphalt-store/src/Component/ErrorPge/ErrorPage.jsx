import React from 'react';
import { NavLink, useRouteError } from "react-router-dom";
import './Error.css'
import { useEffect } from 'react';
const ErrorPage = () => {
  useEffect(() => {
    document.title = "Asphalt |  Error"; // Set the new title here
  }, []);
   const error = useRouteError();
   console.error(error);
  return (
    <div className="error-page">
      <div className="error-image rounded-full disable-hover">
        <iframe
          className=" rounded-full"
          src="https://giphy.com/embed/f1NTdkdbG4XzW"
          width="480"
          height="360"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        {/* <p>
          <a href="https://giphy.com/gifs/car-trouble-keaton-f1NTdkdbG4XzW">
            via GIPHY
          </a>
        </p> */}
      </div>
      <div className="error-content">
        <h2 className="error-heading">Oops! Something went wrong.</h2>
        <p className="error-description">
          We apologize for the inconvenience. Please try again later.
        </p>
        <NavLink to={"/"}>
          {" "}
          <button className="btn bg-blue-600 m-3">Back To Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;