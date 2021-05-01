import React from "react";
import NewsGridItem from "./NewsGridItem";

const NewsGrid = ({ newsList }) => {
  return (
    <ul className="list-none grid gap-9 grid-cols-2">
      {newsList.map((news) => (
        <NewsGridItem key={news.id} news={news} />
      ))}
    </ul>
  );
};

export default NewsGrid;
