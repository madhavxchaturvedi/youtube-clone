import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/contants";
import { getSearchSuggestionData } from "../utils/searchSlice";

const ButtonList = () => {
  const list = [
    "All",
    "Gameing",
    "News",
    "Shoping",
    "songs",
    "Cricket",
    "cooking",
    "live",
    "ipl",
    "electronics",
    "Movie",
    "Story",
    "BGMI",
    "Mixes",
    "Bigg Boss"
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSearchSuggestionsResults = async (item) => {
    navigate(`/results?search_query=${item}`);
    const data = await fetch(
      `${YOUTUBE_SEARCH_RESULTS_API}q=${item}&key=${AUTH_KEY}`
    );
    const json = await data.json();
    dispatch(getSearchSuggestionData(json?.items));
  };

  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button
          name={item}
          key={index}
          getCategory={getSearchSuggestionsResults}
        />
      ))}
    </div>
  );
};

export default ButtonList;
