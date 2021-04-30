import React from "react";
import { useSelector } from "react-redux";

import NewsList from "components/NewsList";
import { getAllNews } from "redux/newsSelectors";

const NewsListContainer = () => {
  const news = useSelector(getAllNews).filter((news) => news);

  return <NewsList newsList={news} />;
};

export default NewsListContainer;
