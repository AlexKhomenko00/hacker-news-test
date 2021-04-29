import React from "react";
import ReactHtmlParser from "react-html-parser";

const Comment = ({ children, root, comment: { by, text, time } }) => {
  return (
    <>
      <div className={`comment-area ${!root ? "ml-5 mt-3" : "ml-0"} mb-2`}>
        <div className="comment-data mb-3 flex justify-between">
          <span className="comment-author text-purple-800">@{by}</span>
          <span className="news-time text-gray-500">{`${new Date(
            time * 1000
          ).toLocaleDateString("us-US", {
            minute: "2-digit",
            hour: "2-digit",
            day: "numeric",
            month: "long",
          })}`}</span>
        </div>
        <div className="comment-text leading-6">
          {" "}
          {ReactHtmlParser(`<span>${text}</span>`)}
        </div>
      </div>
      {children}
    </>
  );
};

export default Comment;
