import { fetchLatestNews } from "../api/news";

import actions from "./newsActions";

const getLatestNews = () => async (dispatch, getState) => {
  const { news } = getState();
  if (news.length === 0) {
    dispatch({ type: actions.LOAD_NEWS_START.toString() });
  }

  try {
    const news = await fetchLatestNews();
    dispatch({
      type: actions.LOAD_NEWS_SUCCSESS.toString(),
      payload: news,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: actions.LOAD_NEWS_ERROR.toString() });
  }
};

const newsOperations = {
  getLatestNews,
};

export default newsOperations;
