import {
  fetchLatestNewsId,
  fetchLatestNewsById,
  fetchById,
  fetchRootComments,
  fetchNestedComments,
} from "../services/news.js";

export const getLatestNews = async (_, res) => {
  try {
    const { data } = await fetchLatestNewsId();

    const latestNewsIds = data.slice(0, 100);

    const news = await fetchLatestNewsById(latestNewsIds);

    res.status(200).json(news);
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ message: "Oops...Something went wrong. Please try again later" });
  }
};

export const getNewsPiece = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const fetchedNews = await fetchById(id);

    if (fetchedNews.type !== "story") {
      return res.status(400).send({ message: "Invalid news' id" });
    }

    const comments = await fetchRootComments(fetchedNews.id);

    const newsPiece = { ...fetchedNews, kids: comments };

    return res.status(200).json(newsPiece);
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ message: "Oops...Something went wrong. Please try again later" });
  }
};

export const getRootComments = async (req, res, next) => {
  const {
    params: { id },
  } = req;

  try {
    const rootComments = await fetchRootComments(id);
    if (!rootComments) {
      return res.status(400).send({ message: "Invalid news' id" });
    }

    return res.status(200).json(rootComments);
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .send({ message: "Oops...Something went wrong. Please try again later" });
  }
};

export const getNestedComments = async (req, res, next) => {
  const {
    params: { commentId },
  } = req;

  if (!commentId) {
    return next();
  }

  const nestedComments = await fetchNestedComments(commentId);

  if (!nestedComments) {
    return res.status(400).send({ message: "Invalid comment's id" });
  }

  return res.status(200).json(nestedComments);
};
