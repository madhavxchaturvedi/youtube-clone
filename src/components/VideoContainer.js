import React, { useEffect, useState } from "react";
import { AUTH_KEY, YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import Shimmer from "../utils/Shimmer";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../utils/searchSlice";
import SearchVideoCard from "./SearchVideoCard";

const VideoContainer = () => {
  // const [Videos, setVideos] = useState([]);
  
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.search.popularVideos);
  const searchVideos = useSelector(
    (store) => store.search.searchSuggestionData
  );
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(getPopularVideos(json?.items));
    // setVideos(json.items);
    // console.log(json.items);
  };

  // console.log(searchVideos);

  const [searchParams] = useSearchParams();

  // console.log(searchParams.get("search_query"));
  return videos === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col  w-full flex-wrap px-4 gap-4 mt-4  justify-center items-center ">
      {searchVideos !== null ? (
        <div className="flex flex-col w-full md:w-3/4 gap-3 p-2">
          <p className="w-full font-semibold text-lg">
            Search Results for{" "}
            <span className="text-red-500 italic">
              {searchParams.get("search_query")}
            </span>
          </p>
          {searchVideos.map((video) => {
            return (
              <Link
                to={"/watch?v=" + video?.id?.videoId}
                key={video?.id?.videoId}
              >
                {/* thumbnail title,channelTitle,publishedat,viewcount */}
                <SearchVideoCard
                  thumbnail={video?.snippet?.thumbnails?.medium?.url}
                  title={video?.snippet?.title}
                  channelTitle={video?.snippet?.channelTitle}
                  description={video?.snippet?.description}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
