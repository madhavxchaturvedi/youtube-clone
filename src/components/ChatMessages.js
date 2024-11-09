import React from "react";

const ChatMessages = ({ name, messages }) => {
  return (
    <div className="flex items-center ml-4 m-1 p-1 ">
      <img
        className="h-7"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user icon"
      />
      <span className="ml-1 p-2 text-sm text-gray-500">{name}</span>
      <span className="text-sm">{messages}</span>
    </div>
  );
};

export default ChatMessages;
