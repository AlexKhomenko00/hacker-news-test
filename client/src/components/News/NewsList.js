import React from "react";

import TrandingNewsList from "components/TrandingNews/TrandingNewsList";
import DevideLine from "components/DevideLine";
import NewsGrid from "components/NewsGrid/NewsGrid";
import RefreshBtn from "components/Buttons/RefreshBtn";

const NewsList = ({ newsList, bestNews, onRefresh }) => {
  return (
    <section className="news-list px-2 lg:px-0">
      <div className="refresh-wrapper text-right">
        <RefreshBtn onResfresh={() => onRefresh(true)} />
      </div>

      <TrandingNewsList bestNews={bestNews} />

      <DevideLine />

      <NewsGrid newsList={newsList} />
    </section>
  );
};

export default NewsList;
