import { configureStore } from "@reduxjs/toolkit";
import rootReduce from "./newsReducer";

const store = configureStore({ reducer: rootReduce });

export default store;
