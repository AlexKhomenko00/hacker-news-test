import React from "react";
import { Link } from "react-router-dom";
import { formatLongTime, parseParagraph } from "../helpers/render";

const News = ({ news: { title, url, time, by: author, text }, children }) => {
  return (
    <article className="news">
      <Link to="/">
        <span className="go-back flex mb-3 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to Latest News
        </span>
      </Link>
      <h1 className="news-title font-bold leading-tight  text-5xl mb-3">
        {title}
      </h1>
      <div className="news-data flex mb-8 justify-between">
        <span className="news-author flex items-center text-green-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          {"  "}
          {author}
        </span>
        <span className="news-time text-gray-500">{formatLongTime(time)}</span>
      </div>

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="news-link underline text-gray-500 hover:text-gray-900 hover:shadow-sm"
        >
          {url}
        </a>
      )}
      {text && (
        <div className="news-text mb-5 text-lg">{parseParagraph(text)}</div>
      )}
      {children}
    </article>
  );
};

export default News;
