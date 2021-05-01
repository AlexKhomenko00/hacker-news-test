import React, { useState } from "react";
import Comment from "containers/CommentContainer";
import RefreshBtn from "../Buttons/RefreshBtn";

const CommentsList = ({ rootComments: comments, getRootComments }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleResfresh = async () => {
    setIsLoading(true);
    await getRootComments();
    setIsLoading(false);
  };

  return (
    <section className="comments mt-7 flex flex-col">
      <div className="comments-header mb-4 flex justify-between items-center">
        <h3 className="comments-title text-gray-500 text-base ">
          Comments... 👾
        </h3>
        <RefreshBtn loading={isLoading} onResfresh={handleResfresh} />
      </div>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default CommentsList;
