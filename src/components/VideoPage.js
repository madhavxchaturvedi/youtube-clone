import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import {
  AUTH_KEY,
  numFormatter,
  YOUTUBE_CHANNEL_INFO_API,
  YOUTUBE_VIDEO_API,
  YOUTUBE_VIDEO_BYID,
} from "../utils/contants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis,
  faLongArrowAltDown,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const VideoPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const [suggestionVideo, setSuggestionVideo] = useState([]);
  const [videoInfo, setVideoInfo] = useState([]);
  const [channelInfo, setChannelInfo] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  const videoDetails = YOUTUBE_VIDEO_BYID + searchParams.get("v");
  // console.log(videoInfo[0]?.snippet?.channelId);
  const truncatedDescription = showDescription
    ? videoInfo[0]?.snippet?.description
    : `${videoInfo[0]?.snippet?.description.substring(0, 200)}...`;

  const toggleDescription = () => setShowDescription(!showDescription);
  const buttonText = showDescription ? "less" : "more";

  const getChannelInfo = async (id) => {
    const data = await fetch(
      YOUTUBE_CHANNEL_INFO_API + id + "&key=" + AUTH_KEY
    );
    const json = await data.json();
    // console.log(json);
    setChannelInfo(json);
  };

  const getSuggestionVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setSuggestionVideo(json.items);
  };

  const getVideoInfo = async () => {
    const data = await fetch(videoDetails);
    const json = await data.json();
    // console.log(json.items);
    setVideoInfo(json.items);
  };

  useEffect(() => {
    getVideoInfo();
    getSuggestionVideo();
    dispatch(closeMenu());
  }, [searchParams]);

  useEffect(() => {
    getChannelInfo(videoInfo[0]?.snippet?.channelId);
  }, [videoInfo, searchParams]);

  return (
    <>
      <div className="flex flex-col ml-8 mt-6">
        <div className="pl-4 rounded-lg">
          <iframe
            className="rounded-lg "
            width="1000"
            height="565"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1&loop=1&playlist=" +
              searchParams.get("v")
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {videoInfo.map((video) => {
            return (
              <>
                {/* Subscriber Section */}
                <div key={video.id}>
                  <h1 className="text-ellipsis overflow-hidden font-bold text-xl m-2">
                    {video?.snippet?.title}
                  </h1>
                  <div className="flex">
                    <div className="flex m-2 -mt-1 items-center w-full">
                      {channelInfo?.items && (
                        <div className="w-10">
                          <img
                            alt="img"
                            className="rounded-full w-full"
                            src={
                              channelInfo?.items[0]?.snippet?.thumbnails?.high
                                ?.url
                            }
                          />
                        </div>
                      )}
                      <ul>
                        <li className="font-bold text-gray-800 ml-2">
                          {video?.snippet?.channelTitle}
                        </li>
                        <li className=" text-xs text-gray-500 font-medium ml-2">
                          2.56M Subscribers
                        </li>
                      </ul>
                      <div className="flex">
                        <button className="bg-[#0f0f0f] text-white border border-gray-200 shadow-sm px-4 py-2 rounded-full m-2 ml-5 font-medium">
                          Subscriber
                        </button>
                        <button className="border flex items-center border-gray-200 shadow-sm px-2 py-1 bg-[#f2f2f2] rounded-full m-2 hover:bg-gray-300 ml-60">
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            className="text-xl text-gray-800"
                          />
                          <p className="text-sm px-3">
                            {numFormatter(video?.statistics?.likeCount)}{" "}
                          </p>
                          <p className="text-lg -mt-1 text-gray-500">|</p>

                          <FontAwesomeIcon
                            icon={faThumbsDown}
                            className="mx-3 text-xl text-gray-800"
                          />
                        </button>
                        <button className=" flex border border-gray-200 items-center shadow-sm px-2 py-1 bg-[#f2f2f2] rounded-full  m-2 hover:bg-gray-300 ">
                          <FontAwesomeIcon icon={faShare} className="mx-2" />
                          <p className="font-medium text-sm mr-2">Share</p>
                        </button>
                        <button className="flex border border-gray-200 shadow-sm items-center px-2 py-1 bg-[#f2f2f2] rounded-full m-2 hover:bg-gray-300 ">
                          <FontAwesomeIcon
                            icon={faLongArrowAltDown}
                            className="mx-2"
                          />
                          <p className="font-medium text-sm mr-2">Download</p>
                        </button>
                        <button className="border border-gray-200 shadow-sm px-2 py-1 bg-[#f2f2f2] rounded-full m-2 hover:bg-gray-300 ">
                          <FontAwesomeIcon icon={faEllipsis} className="mx-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Video Details Section */}

                <div className=" rounded-lg bg-gray-100 p-2">
                  <p className="font-semibold text-sm">
                    {video?.statistics?.viewCount} views&nbsp;
                    {video?.snippet?.publishedAt}
                  </p>
                  <p>
                    {truncatedDescription}
                    {showDescription && <br />}
                    <button
                      className="font-semibold"
                      onClick={toggleDescription}
                    >
                      Show {buttonText}
                    </button>
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <CommentsContainer />
      </div>
      <div className="flex flex-col">
        <div>
          <LiveChat />
        </div>
        {suggestionVideo.map((info) => {
          return (
            <>
              <Link to={"/watch?v=" + info.id} key={info.id}>
                <div className="p-2 ml-4 w-[28rem] flex hover:bg-gray-200 rounded-md">
                  <div className="">
                    <img
                      className="rounded-xl w-[20rem] h-[6.2rem] object-cover"
                      src={info?.snippet?.thumbnails?.high?.url}
                      alt="thumails"
                    />
                  </div>
                  <ul className="ml-2 text-ellipsis overflow-hidden">
                    <li className="font-semibold w-[28rem]">
                      {info?.snippet?.title}
                    </li>
                    <li className="font-normal text-sm opacity-60">
                      {info?.snippet?.channelTitle}
                    </li>
                    <li className="font-normal text-sm opacity-60">
                      {numFormatter(info?.statistics?.viewCount)} views
                    </li>
                  </ul>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default VideoPage;
