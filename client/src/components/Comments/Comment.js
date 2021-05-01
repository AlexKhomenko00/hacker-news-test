import React from "react";
import { formatLongTime, parseParagraph } from "../helpers/render";

import LoadMoreBtn from "components/Buttons/LoadMoreBtn";
import NestedCommentsLoader from "../Loaders/NestedCommentsLoader";

const Comment = ({
  handleLoadMore,
  loading,
  nestedComments,
  root,
  comment: { by, text, time, kids },
  showNestedComments,
}) => {
  return (
    <article className="comment shadow-sm hover:shadow-md mb-1 px-3 text-sm py-3">
      <div className={`comment-area ${!root ? "ml-5 mt-3" : "ml-0"} mb-2`}>
        <div className="comment-data mb-3 flex justify-between">
          <span className="comment-author text-purple-800">@{by}</span>
          <span className="news-time text-gray-500">
            {formatLongTime(time)}
          </span>
        </div>
        <div className="comment-text leading-6"> {parseParagraph(text)}</div>
      </div>
      {root && kids && (
        <div className="comment-footer flex  items-center">
          <LoadMoreBtn
            commentLengh={kids.length}
            onLoadMore={() => handleLoadMore()}
          />
          {loading && (
            <div className="nestedCommentsWrapper flex-grow text-center justify-self-center">
              <NestedCommentsLoader />
            </div>
          )}
        </div>
      )}
      {nestedComments &&
        showNestedComments &&
        nestedComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </article>
  );
};

export default Comment;
