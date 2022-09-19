import React from "react";

const CommentTyping = () => {
  return (
    <div>
      <div className="ml-3 flex items-center">
        <label>Name: </label>
        <input className="p-1  ml-2 text-sm" type="text" placeholder="Name"/>
      </div>
      <div className="flex items-center w-100">
        <textarea
          className="w-100 flex-1 m-3 rounded-md outline-none p-3"
          rows={4}
        />
        <button className="flex items-center py-2 px-2 h-8 drop-shadow-sm bg-blue-500 text-white rounded text-sm">
          Comment
        </button>
      </div>
    </div>
  );
};

export default CommentTyping;
