import { createAction } from "@reduxjs/toolkit";

const LOAD_NEWS_START = createAction("news/LOAD_NEWS_START");
const LOAD_NEWS_SUCCSESS = createAction("news/LOAD_NEWS_SUCCSESS");
const LOAD_NEWS_ERROR = createAction("news/LOAD_NEWS_ERROR");

const LOAD_NEWS_PIECE_START = createAction("news/LOAD_NEWS_PIECE_START");
const LOAD_NEWS_PIECE_SUCCESS = createAction("news/LOAD_NEWS_PIECE_SUCCSESS");
const LOAD_NEWS_PIECE_ERROR = createAction("news/LOAD_NEWS_PIECE_EROR");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  LOAD_NEWS_SUCCSESS,
  LOAD_NEWS_START,
  LOAD_NEWS_ERROR,
  LOAD_NEWS_PIECE_ERROR,
  LOAD_NEWS_PIECE_START,
  LOAD_NEWS_PIECE_SUCCESS,
};
