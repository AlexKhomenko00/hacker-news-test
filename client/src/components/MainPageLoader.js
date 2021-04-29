import React from "react";
import Loader from "react-spinners/PacmanLoader";

const MainPageLoader = () => {
  return (
    <div className="main-page-loader loader flex items-center flex-col">
      <h2 className="ml-4 mb-5">Searching for the BEST news...</h2>
      <Loader />
    </div>
  );
};

export default MainPageLoader;
