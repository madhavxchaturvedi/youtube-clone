import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const Interval = setInterval(() => {
      // console.log("API Polling");
      dispatch(
        addMessages({
          name: generateRandomName(),
          messages: generateRandomText(10) + "😈",
        })
      );
    }, 600);
    return () => clearInterval(Interval);
  }, []);

  return (
    <div className="ml-6 mt-6 border rounded-xl border-gray-200 w-[400px] ">
      <div className="pl-7 p-3 h-12 text-lg font-medium rounded-t-lg">
        Top chat
      </div>
      <div className="overflow-y-scroll border-t  h-[490px]  flex flex-col-reverse">
        {chatMessages.map((m, index) => (
          <ChatMessages name={m.name} messages={m.messages} key={index} />
        ))}
      </div>
      <form
        className="py-2 border border-gray-200 rounded-b-lg flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit", LiveMessage);
          dispatch(
            addMessages({
              name: "Madhav Chaturvedi",
              messages: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <img
          className="h-7 ml-5"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
        />
        <input
          className="bg-gray-100 placeholder-slate-600 ml-1 rounded-full pl-2 w-[72%] h-9 outline-none"
          type="text"
          placeholder="Chat as a subscriber..."
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-1 ml-3 h-7 rounded-md font-bold ">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-xl text-gray-800"
          />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
