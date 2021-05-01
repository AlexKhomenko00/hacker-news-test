import React, { useEffect, useState } from "react";
import { fetchNestedComments } from "api/news";
import Comment from "components/Comments/Comment";

const CommentContainer = ({ comment }) => {
  const [nestedComments, setNestedComments] = useState(null);
  const [showNestedComments, setShowNestedComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setNestedComments("unmounted");
    };
  }, []);

  const handleLoadMore = async () => {
    setShowNestedComments((prevShow) => !prevShow);
    if (nestedComments) return;
    setIsLoading(true);
    const fetchedComments = await fetchNestedComments(comment.id);

    setIsLoading(false);

    if (nestedComments === "unmounted") {
      return;
    }

    setNestedComments(fetchedComments.filter((comment) => !comment.deleted));
  };

  return (
    <Comment
      root
      comment={comment}
      nestedComments={nestedComments}
      handleLoadMore={handleLoadMore}
      showNestedComments={showNestedComments}
      loading={isLoading}
    ></Comment>
  );
};

export default CommentContainer;
