import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";

const MainSection = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const searchVideos = useSelector(
    (store) => store.search.searchSuggestionData
  );

  return (
    <div
      className={
        `
        ${isMenuOpen == true ? "ml-[230px]" : "ml-0"} +
        "flex-1 flex flex-col items-center w-full`
        // onFocus={() => dispatch(classMenu())}
      }
    >
      {!searchVideos && <ButtonList />}
      <VideoContainer />
    </div>
  );
};

export default MainSection;
