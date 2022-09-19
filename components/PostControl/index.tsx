import React from "react";
import DropDown from "../UI/DropDown";

const PostControl = ({ showComment, setShowComment }) => {
  return (
    <div className="flex mt-16 mr-3">
      <div className="text-center">
        <DropDown showComment={showComment} setShowComment={setShowComment} />
      </div>
    </div>
  );
};

export default PostControl;
