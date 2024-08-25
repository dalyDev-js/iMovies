import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col ">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Error{" "}
        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          404
        </mark>{" "}
        Page not found
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        you are trying to access wrong url or doesn't exist, if you are lost
        click here
      </p>
      <Link
        to={"/"}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Home
      </Link>
    </div>
  );
}

export default PageNotFound;
