import { faSquareYoutube, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faCirclePlay,
  faCircleQuestion,
  faClock,
  faComments,
  faFlag,
  faLightbulb,
  faNewspaper,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleRight,
  faBagShopping,
  faClapperboard,
  faClockRotateLeft,
  faFire,
  faGamepad,
  faGear,
  faHouse,
  faListUl,
  faMusic,
  faPodcast,
  faShirt,
  faTowerBroadcast,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early Return Pattern
  if (!isMenuOpen) return null;
  return (
    <div className=" p-3 w-[250px] h-screen fixed z-40 bg-white hover:overflow-y-auto  overflow-hidden">
      <ul className="sidebar">
        <Link to="/">
          <li className="bg-gray-100 pt-2 flex   pl-5 h-10 w-52 rounded-xl">
            <FontAwesomeIcon icon={faHouse} className="text-xl mr-5" />
            Home
          </li>
        </Link>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faCirclePlay} className="text-xl mr-5" />
          Shots
        </li>
        <li className="pt-2 mb-3 pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faSquareYoutube} className="text-xl mr-5" />
          Subscriptions
        </li>
      </ul>
      <hr />
      <h1 className=" text-lg font-medium pl-4 py-2 rounded-xl mt-3 hover:bg-gray-100">
        You
        <FontAwesomeIcon
          icon={faAngleRight}
          className="ml-2 text-sm text-gray-800"
        />
      </h1>
      <ul className="sidebar">
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faClockRotateLeft} className="text-xl mr-5" />
          History
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faListUl} className="text-xl mr-5" />
          Playlist
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faYoutube} className="text-xl mr-5" />
          Your Videos
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faLightbulb} className="text-xl mr-5" />
          Your Courses
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faClock} className="text-xl mr-5" />
          Watch Later
        </li>
        <li className="pt-2  mb-3 pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faThumbsUp} className="text-xl mr-5" />
          Liked videos
        </li>
      </ul>
      <hr />
      <h1 className="font-medium text-lg pl-4 py-2">Explore</h1>
      <ul className="sidebar">
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faFire} className="text-xl mr-5" />
          Trending
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faBagShopping} className="text-xl mr-5" />
          Shopping
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faMusic} className="text-xl mr-5" />
          Music
        </li>
        <li className="pt-2 pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faClapperboard} className="text-xl mr-5" />
          Movie
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faTowerBroadcast} className="text-xl mr-5" />
          Live
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faGamepad} className="text-xl mr-5" />
          Gaming
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faNewspaper} className="text-xl mr-5" />
          News
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faTrophy} className="text-xl mr-5" />
          Sports
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faLightbulb} className="text-xl mr-5" />
          Courses
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faShirt} className="text-xl mr-5" />
          Fasion & Beauty
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100 mb-3">
          <FontAwesomeIcon icon={faPodcast} className="text-xl mr-5" />
          Podcasts
        </li>
      </ul>
      <hr />
      <ul className="sidebar mt-3">
        <Link to="/">
          <li className="pt-2 mt-1  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
            <FontAwesomeIcon icon={faGear} className="text-xl mr-5" />
            Settings
          </li>
        </Link>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faFlag} className="text-xl mr-5" />
          Reprot history
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl hover:bg-gray-100">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-xl mr-5" />
          help
        </li>
        <li className="pt-2  pl-5 h-10 w-52 rounded-xl mb-36 hover:bg-gray-100">
          <FontAwesomeIcon icon={faComments} className="text-xl mr-5" />
          Send feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
