import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-0">
      <h1 className="py-1 mx-2 text-lg text-white md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title != null ? movie.title : movie.original_name}
              posterPath={movie.poster_path}
              backdropPath={movie.backdrop_path}
              // name={movie.original_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;