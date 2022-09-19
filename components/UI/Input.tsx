import React from "react";

type Props = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: Props) => {
  return (
    <div>
      <input
        className="rounded-sm px-3 py-1 bg-slate-100 text-gray-500 outline-0 w-full"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
