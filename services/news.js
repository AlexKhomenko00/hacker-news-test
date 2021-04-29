import axios from "axios";

export const fetchLatestNewsId = async () =>
  axios.get("https://hacker-news.firebaseio.com/v0/newstories.json");

export const fetchById = async (id) => {
  const { data } = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return data;
};

export const fetchLatestNewsById = (idArr) => {
  return Promise.all(idArr.map(async (id) => await fetchById(id)));
};

export const fetchRootComments = async (newsId) => {
  try {
    const news = await fetchById(newsId);

    if (news.type !== "story") {
      return null;
    }

    const { kids: commentsIDs } = news;

    if (!commentsIDs) {
      return [];
    }

    return Promise.all(commentsIDs.map(async (kid) => await fetchById(kid)));
  } catch (e) {
    throw e;
  }
};

export const fetchNestedComments = async (commentId) => {
  const comment = await fetchById(commentId);

  if (comment.type !== "comment") {
    return null;
  }

  const { kids: nestedComments } = comment;

  return Promise.all(nestedComments.map(async (kid) => await fetchById(kid)));
};
