import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500 mb-4">BKL Shi path daal</h1>
      {error && <p className="text-gray-700 mb-4">{error.data}</p>}
      <NavLink to="/Home">
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
          Go back to Home
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
