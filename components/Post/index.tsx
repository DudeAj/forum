import React, { useState } from "react";
import Image from "next/image";
import PostContent from "../PostContent";
import PostControl from "../PostControl";
import { PostsType } from "../../types/store";

type Props = {
  post: PostsType;
};

const Post: React.FC<Props> = ({ post }) => {
  const [showComment, setShowComment] = useState<boolean>(false);
  return (
    <div className="flex mt-6">
      <PostControl showComment={showComment} setShowComment={setShowComment} />
      <PostContent postContent={post} showComment={showComment} />
    </div>
  );
};

export default Post;
