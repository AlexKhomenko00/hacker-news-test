import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import newsOperations from "redux/newsOperations";

import NewsList from "containers/NewsListContainer";
import { getIsLoading } from "redux/newsSelectors";
import MainPageLoader from "components/Loaders/MainPageLoader";
import { useCallback } from "react";

const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const fetchLastestNews = useCallback(
    (triggered) => dispatch(newsOperations.getLatestNews(triggered)),
    [dispatch]
  );

  useEffect(() => {
    fetchLastestNews(true);
    const updateInterval = setInterval(fetchLastestNews, 60000);

    return () => clearInterval(updateInterval);
  }, [dispatch, fetchLastestNews]);

  if (isLoading) return <MainPageLoader />;

  return (
    <section className="main-page pt-6">
      <NewsList onRefresh={fetchLastestNews} />
    </section>
  );
};
export default MainPage;
