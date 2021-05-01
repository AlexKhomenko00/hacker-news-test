import React from "react";
import Loader from "react-spinners/RingLoader";

const NewsPageLoader = () => {
  return (
    <div className="news-page-loader loader flex items-center flex-col">
      <h2 className="ml-4 mb-5">Throwing out the hatters' comments...</h2>
      <Loader />
    </div>
  );
};

export default NewsPageLoader;
