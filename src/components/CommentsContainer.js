import React, { useState } from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../utils/commentSlice";

// const commentsData = [
//   {
//     name: "Madhav Chaturvedi",
//     text: "lorem ipse dolar sit ametr, consetor helose",
//     replies: [
//       {
//         name: "Madhav Chaturvedi",
//         text: "lorem ipse dolar sit ametr, consetor helose",
//         replies: [],
//       },
//       {
//         name: "Madhav Chaturvedi",
//         text: "lorem ipse dolar sit ametr, consetor helose",
//         replies: [],
//       },
//       {
//         name: "Madhav Chaturvedi",
//         text: "lorem ipse dolar sit ametr, consetor helose",
//         replies: [
//           {
//             name: "Madhav Chaturvedi",
//             text: "lorem ipse dolar sit ametr, consetor helose",
//             replies: [
//               {
//                 name: "Madhav Chaturvedi",
//                 text: "lorem ipse dolar sit ametr, consetor helose",
//                 replies: [
//                   {
//                     name: "Madhav Chaturvedi",
//                     text: "lorem ipse dolar sit ametr, consetor helose",
//                     replies: [
//                       {
//                         name: "Madhav Chaturvedi",
//                         text: "lorem ipse dolar sit ametr, consetor helose",
//                         replies: [],
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             name: "Madhav Chaturvedi",
//             text: "lorem ipse dolar sit ametr, consetor helose",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Madhav Chaturvedi",
//     text: "lorem ipse dolar sit ametr, consetor helose",
//     replies: [],
//   },
//   {
//     name: "Madhav Chaturvedi",
//     text: "lorem ipse dolar sit ametr, consetor helose",
//     replies: [],
//   },
//   {
//     name: "Madhav Chaturvedi",
//     text: "lorem ipse dolar sit ametr, consetor helose",
//     replies: [],
//   },
// ];

const CommmentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommmentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const [textComment, setTextComment] = useState("");

  const dispatch = useDispatch();
  const chatComments = useSelector((store) => store.comment.comments);
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl m-2 font-bold">
        {chatComments.length}&nbsp;Comments
      </h1>
      <form
        className="p-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On submit", textComment);
          dispatch(
            addComment({
              name: "Madhav Chaturvedi",
              text: textComment,
              replies: [],
            })
          );
          setTextComment("");
        }}
      >
        <div className="flex items-start">
          <div className="">
            <img
              className="w-12 h-12 mr-4"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt="user"
            />
          </div>
          <div className="flex flex-col w-full">
            <div>
              <input
                className="w-full outline-none placeholder:text-gray-700 border border-b-gray-500 focus:border-b-black focus:border-2 border-x-white border-t-white"
                type="text"
                placeholder="Add a comment..."
                value={textComment}
                onChange={(e) => {
                  setTextComment(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-end">
              <button
                disabled={textComment.length === 0}
                className=" mt-2 px-3 py-1  bg-[#065fd4] text-white font-medium rounded-full disabled:cursor-not-allowed disabled:bg-[#f2f2f2] disabled:text-[#909090]"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      <CommmentsList comments={chatComments} />
    </div>
  );
};

export default CommentsContainer;
