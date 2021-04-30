import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import newsOperations from "redux/newsOperations";

import NewsList from "containers/NewsListContainer";
import { getIsLoading } from "redux/newsSelectors";
import MainPageLoader from "components/MainPageLoader";

const MainPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(newsOperations.getLatestNews());
    const updateInterval = setInterval(
      () => dispatch(newsOperations.getLatestNews()),
      60000
    );

    return () => clearInterval(updateInterval);
  }, [dispatch]);

  if (isLoading) return <MainPageLoader />;

  return (
    <section className="main-page pt-6">
      <NewsList />
    </section>
  );
};
export default MainPage;
