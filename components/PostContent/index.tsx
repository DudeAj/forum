import React, { useState } from "react";
import Image from "next/image";
import PostComment from "../PostComment";
import { PostsType } from "../../types/store";

type Props = {
  postContent: PostsType;
  showComment: boolean;
};

const PostContent: React.FC<Props> = ({ postContent, showComment }) => {
  return (
    <div className="divide-y divide-slate-200">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-lg">{postContent.title}</h1>
            <div className="ml-3 bg-indigo-500 px-2 py-1 text-sm text-white font-semibold">
              {postContent.author.role}
            </div>
          </div>
          <Image
            width={24}
            height={24}
            src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
          />
        </div>
        <div className="mt-3">
          <p className="text-gray-500 text-sm">{postContent.content}</p>
        </div>
      </div>
      {showComment ? <PostComment /> : null}
    </div>
  );
};

export default PostContent;
