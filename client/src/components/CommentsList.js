import React from "react";
import Comment from "../containers/CommentContainer";

const CommentsList = ({ rootComments: comments }) => {
  return (
    <section className="comments mt-7 flex flex-col">
      <h3 className="comments-title text-gray-500 text-base mb-4">
        Comments... 👾
      </h3>

      {comments.map((comment) => (
        <article
          key={comment.id}
          className="comment shadow-sm hover:shadow-md mb-1 px-3 text-sm py-3"
        >
          <Comment comment={comment} />
        </article>
      ))}
    </section>
  );
};

export default CommentsList;
