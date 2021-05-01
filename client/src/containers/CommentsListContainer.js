import React, { useState, useEffect } from "react";
import { fetchRootComments } from "api/news";
import CommentsList from "components/Comments/CommentsList";
import { useCallback } from "react";

const CommentsListContainer = ({ initialComments }) => {
  const [rootComments, setRootComments] = useState(
    initialComments.filter((comment) => !comment.deleted)
  );

  const getRootComments = useCallback(
    async (cancel) => {
      const comments = await fetchRootComments(initialComments[0].parent);
      if (cancel) {
        return;
      }
      setRootComments(comments.filter((comment) => !comment.deleted));
    },
    [initialComments]
  );

  useEffect(() => {
    let cancel = false;

    const commentsInterval = setInterval(() => {
      getRootComments(cancel);
    }, 60000);

    return () => {
      cancel = true;
      clearInterval(commentsInterval);
    };
  }, [initialComments, getRootComments]);

  return (
    <CommentsList
      rootComments={rootComments}
      getRootComments={getRootComments}
    />
  );
};

export default CommentsListContainer;
