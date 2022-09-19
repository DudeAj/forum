import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@primer/octicons-react";

const DropDown = ({ showComment, setShowComment }) => {
  const handleToggle = () => {
    setShowComment(!showComment);
  };

  const handleClose = () => {
    setShowComment(false);
  };
  return (
    <div>
      <div onClick={handleClose}>
        <ArrowUpIcon className="pointer" />
      </div>
      <div className="text-sm">45</div>
      <div onClick={handleToggle}>
        <ArrowDownIcon className="pointer" />
      </div>
    </div>
  );
};

export default DropDown;
