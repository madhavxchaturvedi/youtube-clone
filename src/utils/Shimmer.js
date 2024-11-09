const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(16)
        .fill("")
        .map((e, index) => (
          <div key={index} className="flex flex-col justify-center m-3">
            <div className=" mt-3 w-[25rem] h-56 rounded-lg border bg-gray-300 "></div>
            <div className=" h-3 mt-3 w-60 rounded-full border bg-gray-300 ">
              {" "}
            </div>
            <div className=" h-3 mt-2 mb-6 w-24 rounded-full border bg-gray-300 ">
              {" "}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
