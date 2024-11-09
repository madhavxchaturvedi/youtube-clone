import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <>
      {/* <div className="mt-4 flex border border-black shadow-md bg-gray-100 rounded-lg">
        <img
          className="w-8 h-8 m-2"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
        <div className="px-3">
          <p className="font-bold">{name}</p>
          <p className="font-semibold">{text}</p>
        </div>
        <form>
          <button>replies</button>
        </form>
      </div> */}

      <div className="flex gap-2 my-4">
        <img
          className="w-10 h-10 m-2"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <h3 className="text-md font-semibold text-gray-700">{name}</h3>
            <p className="text-xs text-gray-500">1 minute ago</p>
          </div>
          <p>{text}</p>
          <div className="flex items-center gap-8 mt-2">
            <div className="hover:bg-gray-200 rounded-full px-2 py-[0.4rem]">
              <FontAwesomeIcon icon={faThumbsUp} className="text-xl" />
            </div>
            <div className="hover:bg-gray-200 rounded-full px-2 py-[0.4rem]">
              <FontAwesomeIcon icon={faThumbsDown} className="text-xl" />
            </div>
            <div className="hover:bg-gray-200 rounded-full px-3 py-[0.4rem]">
              <p className="text-xs font-semibold">Reply</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
