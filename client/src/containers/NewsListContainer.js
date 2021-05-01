import React from "react";
import { useSelector } from "react-redux";

import NewsList from "components/News/NewsList";
import { getAllNews } from "redux/newsSelectors";

const NewsListContainer = ({ onRefresh }) => {
  const news = useSelector(getAllNews).filter((news) => news);

  const bestNews = news
    .slice()
    .sort((a, b) => a && b && b.score - a.score)
    .slice(0, 6);

  return <NewsList newsList={news} bestNews={bestNews} onRefresh={onRefresh} />;
};

export default NewsListContainer;
