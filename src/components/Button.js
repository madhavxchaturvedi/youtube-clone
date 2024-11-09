import React from "react";

const Button = ({ name, getCategory }) => {
  return (
    <div>
      <button className="px-2 py-1 mt-5 mr-4 bg-gray-100  rounded-lg font-medium  hover:bg-gray-300" onClick={() => getCategory(name)}>
        {name}
      </button>
    </div>
  );
};

export default Button;
