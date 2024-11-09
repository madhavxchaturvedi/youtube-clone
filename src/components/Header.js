import React, { useEffect, useState } from "react";

import {
  YOUTUBE_SEARCH_API,
  AUTH_KEY,
  YOUTUBE_SEARCH_RESULTS_API,
} from "../utils/contants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  clearSearchQuery,
  getSearchQuery,
  getSearchSuggestionData,
  getSearchSuggestionQuery,
} from "../utils/searchSlice";

import { useNavigate, Link } from "react-router-dom";
import {
  faBell,
  faMagnifyingGlass,
  faMicrophone,
  faSquarePlus,
  faUserSecret,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const searchQuery1 = useSelector((store) => store.search.searchQuery);

  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchSuggestionList = useSelector(
    (store) => store.search.searchSuggestionQuery
  );

  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    try {
      if (searchQuery1.length > 0) {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery1);
        const result = await data.json();
        dispatch(getSearchSuggestionQuery(result?.data[1]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(searchQuery1.length);

  // const getVideosByCORS = async () => {
  //   try {
  //     const data = await fetch("http://localhost:8000/?q=" + searchQuery1);
  //     const result = await data.json();
  //     console.log("from server", result?.data[1]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getSearchSuggestionsResults = async (e) => {
    try {
      e.preventDefault();
      navigate(`/results?search_query=${searchQuery1}`);
      if (searchQuery1.length > 0) {
        const data = await fetch(
          `${YOUTUBE_SEARCH_RESULTS_API}q=${searchQuery1}&key=${AUTH_KEY}`
        );
        const json = await data.json();
        console.log(json?.items);
        dispatch(getSearchSuggestionData(json?.items));

        setSearchSuggestions(!searchSuggestions);
        dispatch(getSearchSuggestionQuery(""));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //make an api call on every key press. But as soon as diff between keypress is less than 200ms don't make api call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery1]);

  // const handleResultOnClick = (i) => {
  //   console.log(searchSuggestionList[i], "world");
  // };

  return (
    <div className="flex  justify-between items-center p-1 md:p-2 w-full sticky top-0 z-50 bg-white">
      <ul className="flex   items-center  ml-4 w-[40px] md:w-[220px]  md:gap-6  ">
        <li
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer text-3xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
          </svg>
        </li>
        <a href="/">
          <li className=" md:flex gap-1 hidden items-center  ">
            <div className="text-lg font-bold">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
                alt="June 2024 – present"
                height="40"
                width="100"
              />
            </div>
          </li>
        </a>
      </ul>

      <form
        className="flex justify-center   items-center    md:w-3/6 "
        onSubmit={(e) => getSearchSuggestionsResults(e)}
        onBlur={() =>
          searchQuery1.length === 0 && setSearchSuggestions(!searchSuggestions)
        }
      >
        <div className="flex-1 flex  justify-center  md:justify-center ">
          <div className=" flex justify-between w-3/4 md:w-3/4 relative">
            <input
              type="text"
              value={searchQuery1}
              onChange={(e) => dispatch(getSearchQuery(e.target.value))}
              className=" focus:outline-blue-700 outline-1  border-y border-l border-y-slate-400 border-l-slate-400 pl-4 w-full   rounded-tl-full py-2  rounded-bl-full placeholder:text-sm md:placeholder:text-base placeholder-gray-400 placeholder:font-medium  truncate text-md active "
              placeholder="Search"
              onFocus={() => setSearchSuggestions(!searchSuggestions)}
            />
            {searchQuery1.length > 0 && (
              <button
                className="border-2 px-2 border-y-blue-600 "
                onClick={() => dispatch(clearSearchQuery())}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            )}

            {searchSuggestions && searchQuery1.length > 0 && (
              <div className="absolute z-40 bg-white w-full border  shadow-2xl rounded-xl p-2 py-3 px-4 mt-[3rem]">
                {searchSuggestionList !== null &&
                  searchSuggestionList !== "" &&
                  searchSuggestionList.map((result, i) => (
                    <button
                      className="  flex hover:bg-gray-200 w-full  cursor-pointer "
                      key={i}
                      onClick={() => dispatch(getSearchQuery(result))}
                    >
                      <span>
                        <span className="mr-2">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        {result}
                      </span>
                    </button>
                  ))}
              </div>
            )}
          </div>
          <div className=" w-[20px] md:w-[2rem]">
            <button className="border-y border-r border-l border-l-slate-400 border-y-slate-400 border-r-slate-400 rounded-tr-full  flex justify-center  rounded-br-full py-2 px-8 w-full  bg-gray-100">
              <div>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-xl text-gray-700"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="text-xl px-[0.8rem] border border-gray-200 -ml-6 bg-gray-100 py-[0.4rem] rounded-full">
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
      </form>
      <div className="flex gap-8 text-2xl items-center justify-between">
        <div>
          <FontAwesomeIcon icon={faSquarePlus} />
        </div>
        <div>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="pr-6">
          <FontAwesomeIcon icon={faUserSecret} />
        </div>
      </div>
    </div>
  );
};

export default Header;
