import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchVideoCard = ({
  id,
  thumbnail,
  title,
  channelTitle,
  description,
}) => {
  return (
    <div
      className="flex-col flex md:flex-row gap-2 h-fit rounded-xl"
      key={id}
    >
      <div className="rounded-xl">
        <img src={thumbnail} alt="thumbnail" className="rounded-xl w-[30rem]" />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-2/4 ml-3">
        <p className=" text-lg md:text-xl text-ellipsis overflow-hidden ">
          {title}
        </p>
        <p className="text-xs -mt-1 text-gray-600 font-medium">20M views</p>
        <p className="truncate mt-2 text-gray-600 font-medium flex items-center gap-2">
          <FontAwesomeIcon
            icon={faUser}
            className="text-black border border-black p-1 rounded-full"
          />
          <p className="text-xs">{channelTitle}</p>
        </p>
        <p className="text-gray-600 mt-3 text-xs text-ellipsis overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
