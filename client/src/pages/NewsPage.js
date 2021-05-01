import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "api/news";

import actions from "redux/newsActions";
import { getIsLoading } from "redux/newsSelectors";

import News from "components/News/News";
import CommentsList from "containers/CommentsListContainer";
import NewsPageLoader from "components/Loaders/NewsPageLoader";
import DevideLine from "components/DevideLine";

export default function NewsPage({
  match: {
    params: { newsId },
  },
}) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [news, setNews] = useState({});

  useEffect(() => {
    let cancel = false;

    const fetchNewsPiece = async (id) => {
      try {
        dispatch({ type: actions.LOAD_NEWS_PIECE_START.toString() });
        const news = await fetchNews(id);
        if (cancel) {
          return;
        }
        setNews(news);
      } catch (e) {
        dispatch({ type: actions.LOAD_NEWS_PIECE_ERROR.toString() });
      } finally {
        dispatch({ type: actions.LOAD_NEWS_PIECE_SUCCESS.toString() });
      }
    };

    fetchNewsPiece(newsId);

    return () => {
      cancel = true;
    };
  }, [newsId, dispatch]);

  if (isLoading) return <NewsPageLoader />;

  return (
    <section className="container py-7 w-3/4 m-auto">
      <News news={news}>
        {news.kids && news.kids.length > 0 && (
          <>
            <DevideLine />
            <CommentsList initialComments={news.kids} />
          </>
        )}
      </News>
    </section>
  );
}
