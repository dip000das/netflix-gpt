import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailTitle = ({ tvdata, moviesdata, handleBackToBrowse, title }) => {
  return (
    <div className="bg-gradient-to-r from-black">
      <button
        className="absolute px-4 py-2 text-white bg-red-800 rounded-lg top-4 left-4"
        onClick={handleBackToBrowse}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back
      </button>
      <div className="text-white absolute ml-14 top-[250px] ">
        <h1 className="text-6xl font-semibold">
          {tvdata?.name === title
            ? tvdata?.name
            : moviesdata?.title || "Loading..."}
        </h1>
        <h5 className="my-2 text-sm">
          Runtime:{" "}
          {tvdata?.name === title
            ? tvdata?.runtime
            : moviesdata?.runtime || "Loading..."}{" "}
          minutes
        </h5>
        <p className="mt-2 font-medium w-[60%]">
          {tvdata?.name === title
            ? tvdata?.overview
            : moviesdata?.overview || "Loading..."}
        </p>
        <div className="flex mx-0">
          {(tvdata?.name === title ? tvdata?.genres : moviesdata?.genres)?.map(
            (genre) => (
              <p
                key={genre?.id}
                className="px-4 py-2 mx-2 mt-10 text-lg text-white bg-black rounded-lg opacity-70"
              >
                {genre?.name}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailTitle;