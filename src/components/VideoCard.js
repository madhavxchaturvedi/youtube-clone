import React, { useEffect, useState } from "react";
import {
  AUTH_KEY,
  numFormatter,
  YOUTUBE_CHANNEL_INFO_API,
} from "../utils/contants";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoCard = ({ info }) => {
  // console.log(info);
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;

  const [channelInfo, setChannelInfo] = useState(null);

  // console.log(channelInfo);
  useEffect(() => {
    getChannelInfo(info?.snippet?.channelId);
  }, []);

  const getChannelInfo = async (id) => {
    const data = await fetch(
      YOUTUBE_CHANNEL_INFO_API + id + "&key=" + AUTH_KEY
    );
    const json = await data.json();
    setChannelInfo(json);
  };

  return (
    <div className="card m-2 mb-8 w-[25rem]">
      <img
        alt="img"
        className="rounded-lg w-full"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <div className="flex mt-2">
        {channelInfo !== "null" && (
          <div className="mr-3 mt-1">
            <img
              alt="img"
              className="card-img rounded-full h-9 object-cover max-w-max"
              src={channelInfo?.items[0]?.snippet?.thumbnails?.high?.url}
            />
          </div>
        )}
        <div className="overflow-hidden">
          <div className="flex items-center">
            <div className="font-semibold truncate">{info?.snippet?.title}</div>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="mx-3 text-right"
            />
          </div>
          <div>
            <h2 className="mt-[0.1rem] font-normal text-sm opacity-60">
              {info?.snippet?.channelTitle}
            </h2>
            <h2 className="font-normal text-base opacity-60 -mt-1">
              {numFormatter(info?.statistics?.viewCount)} views
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
