import React, { useEffect, useState } from "react";
import { fetchNestedComments } from "../api/news";
import Comment from "../components/Comment";
import LoadMoreBtn from "../components/LoadMoreBtn";

const CommentContainer = ({ comment }) => {
  const [nestedComments, setNestedComments] = useState([]);

  useEffect(() => {
    return () => {
      setNestedComments(null);
    };
  }, []);

  const handleLoadMore = async (commmentId) => {
    if (nestedComments.length > 0) return setNestedComments([]);
    const fetchedComments = await fetchNestedComments(commmentId);

    if (!nestedComments) {
      return;
    }
    setNestedComments(fetchedComments);
  };

  return (
    <Comment root comment={comment}>
      {comment.kids && (
        <LoadMoreBtn
          commentLengh={comment.kids.length}
          onLoadMore={() => handleLoadMore(comment.id)}
        />
      )}
      {nestedComments.length > 0 &&
        nestedComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </Comment>
  );
};

export default CommentContainer;
