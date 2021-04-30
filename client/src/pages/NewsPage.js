import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "api/news";

import actions from "redux/newsActions";
import { getIsLoading } from "redux/newsSelectors";

import News from "components/News";
import CommentsList from "containers/CommentsListContainer";
import NewsPageLoader from "components/NewsPageLoader";

export default function NewsPage({
  match: {
    params: { newsId },
  },
}) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const [news, setNews] = useState({});

  useEffect(() => {
    const fetchNewsPiece = async (id) => {
      try {
        dispatch({ type: actions.LOAD_NEWS_PIECE_START.toString() });
        const news = await fetchNews(id);
        setNews(news);
        dispatch({ type: actions.LOAD_NEWS_PIECE_SUCCESS.toString() });
      } catch (e) {
        dispatch({ type: actions.LOAD_NEWS_PIECE_ERROR.toString() });
      } finally {
        dispatch({ type: actions.LOAD_NEWS_PIECE_SUCCESS.toString() });
      }
    };

    fetchNewsPiece(newsId);
  }, [newsId, dispatch]);

  if (isLoading) return <NewsPageLoader />;

  return (
    <section className="container py-7 w-3/4 m-auto">
      <News news={news}>
        {news.kids && news.kids.length > 0 && (
          <>
            <hr className="devide-line my-6" />
            <CommentsList initialComments={news.kids} />
          </>
        )}
      </News>
    </section>
  );
}
