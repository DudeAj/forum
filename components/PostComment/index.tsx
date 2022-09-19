import React from "react";
import Comment from "../Comment";
import CommentTyping from "../CommentTyping";
const PostComment = () => {
  return (
    <div className="my-5 py-5 bg-slate-100">
      <Comment level="1" />
      <Comment level="1.2" />
      <Comment level="1.3.5" />
      <Comment level="1" />
      <Comment level="1" />
      <CommentTyping />
    </div>
  );
};

export default PostComment;
