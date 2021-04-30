import React, { useState, useEffect } from "react";
import { fetchRootComments } from "api/news";
import CommentsList from "components/CommentsList";

const CommentsListContainer = ({ initialComments }) => {
  const [rootComments, setRootComments] = useState(
    initialComments.filter((comment) => !comment.deleted)
  );

  useEffect(() => {
    let cancel = false;

    const refreshComments = async () => {
      const comments = await fetchRootComments(initialComments[0].parent);
      if (cancel) return;
      setRootComments(comments.filter((comment) => !comment.deleted));
    };

    const commentsInterval = setInterval(() => {
      refreshComments();
    }, 60000);

    return () => {
      cancel = true;
      clearInterval(commentsInterval);
    };
  }, [initialComments]);

  return <CommentsList rootComments={rootComments} />;
};

export default CommentsListContainer;
