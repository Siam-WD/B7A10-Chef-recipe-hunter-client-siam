import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow"></div>
      <div className="flex justify-center items-center h-48">
        <div className="w-64 h-16 bg-red-500 rounded-lg flex justify-center items-center">
          <h1 className="text-white font-bold text-3xl">Oops!</h1>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <p className="text-gray-500 text-lg">
          Something went wrong. Please try again later.
        </p>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default ErrorPage;
