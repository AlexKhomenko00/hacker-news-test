import React from "react";
import { Link } from "react-router-dom";
import { formatTime } from "../helpers/render.js";

const TrandingNewsItem = ({ news: { title, by, time, id, score }, index }) => {
  return (
    <li
      key={id}
      className="news-item flex align-top w-full md:w-1/2 lg:w-1/3 mb-6"
    >
      <Link to={`/news/${id}`} className="flex w-full">
        <span className="news-number font-semibold  text-gray-200 text-4xl mr-5">
          {index + 1 > 10 ? index + 1 : `0${index + 1}`}
        </span>
        <article className="news-content flex flex-grow flex-col flex-wrap">
          <span className="author flex items-center  font-normal text-black mb-2">
            @{by}
          </span>
          <h3 className="news-title font-bold mb-5">{title}</h3>
          <div className="adittional-data flex justify-between ">
            <span className="time text-gray-400">{formatTime(time)}</span>
            <div className="rating flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 "
                viewBox="0 0 20 20"
                fill="grey"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z " />
              </svg>
              <span className=" text-gray-400 align-text-topscore">
                {score}
              </span>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default TrandingNewsItem;
