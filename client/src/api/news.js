import axios from "axios";
const BASE_URL = "https://hacker-news-test-task.herokuapp.com/api/news";

export const fetchLatestNews = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/latest`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchNews = async (newsID) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${newsID}`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchRootComments = async (newsID) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${newsID}/comments`);
    return data;
  } catch (e) {
    throw e;
  }
};

export const fetchNestedComments = async (commentid) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/comments/${commentid}`);
    return data;
  } catch (e) {
    throw e;
  }
};
