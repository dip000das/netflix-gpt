import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ title, posterPath, id, original_name, backdropPath }) => {
  if (!posterPath) return null;

  // Generate a random number
  const randomNum = Math.random();

  // Check if the red line should be shown (e.g., 30% chance)
  const showRedLine = randomNum < 0.3;

  // Generate a random width for the red line
  const randomWidth = Math.floor(Math.random() * 100); // Adjust the maximum width as needed

  return (
    <div className="relative w-screen p-1 rounded-lg md:w-80 hover:scale-105">
      <Link to={`/browse/${id}?title=${encodeURIComponent(title)}`}>
        <img
          className="object-cover rounded-lg"
          alt={title != null ? title : original_name}
          src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
        />
      </Link>
      <div className="relative mt-2">
        {showRedLine && (
          <>
            <div className="w-full h-1 bg-zinc-400"></div>
            <div
              className="w-full h-1 bg-red-500"
              style={{ width: `${randomWidth}%`, position: "absolute", top: 0 }}
            ></div>
          </>
        )}
      </div>
      <h1 className="mt-2 text-lg text-white">{title}</h1>
    </div>
  );
};

export default MovieCard;