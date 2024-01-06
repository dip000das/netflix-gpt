import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold md:text-5xl">{title}</h1>
      <p className="hidden w-1/3 py-6 md:inline-block text-m">{overview}</p>
      <div className="my-4 md:m-0">
        <Link to={`/browse/${id}?title=${encodeURIComponent(title)}`}>
          <button className="px-3 py-1 text-xl text-black bg-white rounded-lg md:p-4 md:px-12">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
        </Link>
        <Link to={`/browse/${id}?title=${encodeURIComponent(title)}`}>
          <button className="p-4 px-3 mx-4 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg md:px-12">
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;