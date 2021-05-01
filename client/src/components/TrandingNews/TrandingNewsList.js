import React from "react";
import TrandingNewsItem from "./TrandingNewsItem";

const TrandingNewsList = ({ bestNews }) => {
  return (
    <ul className="trending align-top list-none flex flex-col md:flex-row  flex-wrap justify-between mb-7">
      {bestNews.map((news, index) => (
        <TrandingNewsItem key={news.id} news={news} index={index} />
      ))}
    </ul>
  );
};

export default TrandingNewsList;
