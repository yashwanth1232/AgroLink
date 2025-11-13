import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
