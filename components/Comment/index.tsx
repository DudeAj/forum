/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import PostControl from "../PostControl";
import DropDown from "../UI/DropDown";

const Comment = ({ level }) => {
  const nestingLevel = (level.split(".").length - 1) * 3;
  console.log({ nestingLevel });
  return (
    <div className="p-3" style={{ marginLeft: `${nestingLevel}rem` }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full flex items-center w-6">
            <Image
              width={100}
              height={100}
              src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
              alt=""
            />
          </div>
          <h1 className="ml-5">Ajay Kumar</h1>
        </div>
        <span className="text-sm text-gray-500">12 hours</span>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center w-6 ">
          <DropDown />
        </div>
        <div className="ml-5">
          <span className="text-gray-500 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </span>
          <div className="flex justify-between w-2/5 text-sm mt-4 text-gray-500">
            <div>Reply</div>
            <div>Share</div>
            <div>Report</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
