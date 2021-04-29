import { combineReducers, createReducer } from "@reduxjs/toolkit";
import actions from "./newsActions";

const news = createReducer([], {
  [actions.LOAD_NEWS_SUCCSESS]: (_, { payload }) => [...payload],
});

const loading = createReducer(false, {
  [actions.LOAD_NEWS_START]: () => true,
  [actions.LOAD_NEWS_SUCCSESS]: () => false,
  [actions.LOAD_NEWS_ERROR]: () => false,
  [actions.LOAD_NEWS_PIECE_START]: () => true,
  [actions.LOAD_NEWS_PIECE_SUCCESS]: () => false,
  [actions.LOAD_NEWS_PIECE_ERROR]: () => false,
});

export default combineReducers({ news, loading });
