import React from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "routers/root";

export default ({ admin }) => {
  return (
    <div className='text-center w-screen mt-24 '>
      <h1 className='text-6xl font-black '>404</h1>
      <h2 className='text-4xl font-bold '>Page not found</h2>
      <p className='mt-2'>
        <Link to={admin ? baseUrl : "/"} className='underline'>
          Back to the main page
        </Link>
      </p>
    </div>
  );
};
