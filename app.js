"use strict";

import express from "express";
import cors from "cors";
import path from "path";

import newsRouter from "./routers/news.js";

const __dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/news", newsRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

export default app;
