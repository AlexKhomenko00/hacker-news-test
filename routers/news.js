import { Router } from "express";
import {
  getLatestNews,
  getNewsPiece,
  getRootComments,
  getNestedComments,
} from "../controllers/news.js";

const newsRouter = Router();

newsRouter.use("/latest", getLatestNews);
newsRouter.use("/comments/:commentId", getNestedComments);
newsRouter.use("/:id/comments", getRootComments);
newsRouter.use("/:id", getNewsPiece);

export default newsRouter;
