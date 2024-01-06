import React from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecommendationContainer = ({
  tvdata,
  similarTv,
  similarMovie,
  title,
}) => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="w-screen mt-20 bg-zinc-800">
      <div className="relative z-20 pl-4 mt-0 md:-mt-40 md:pl-12">
        <h1 className="mt-10 mb-2 text-4xl text-white">
          Similar Recommendations
        </h1>
        <div className="flex flex-row overflow-x-scroll no-scrollbar">
          {tvdata?.name === title ? (
            <div className="flex">
              {similarTv?.results.map(
                (item) =>
                  item.backdrop_path && (
                    <div
                      key={item.id}
                      className="relative p-1 mr-4 rounded-lg w-80 hover:scale-105"
                    >
                      {item.backdrop_path && (
                        <>
                          <Link
                            to={`/browse/${item.id}?title=${encodeURIComponent(
                              item.original_name
                            )}`}
                          >
                            <img
                              className="object-cover rounded-lg"
                              alt={item.name}
                              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                            />
                          </Link>
                          <h1 className="mt-2 text-lg text-white">
                            {item.name}
                          </h1>
                        </>
                      )}
                    </div>
                  )
              )}
            </div>
          ) : (
            <div className="flex">
              {similarMovie?.results.map(
                (item) =>
                  item.backdrop_path && (
                    <div
                      key={item.id}
                      className="relative p-1 mr-4 rounded-lg w-80 hover:scale-105"
                    >
                      {item.backdrop_path && (
                        <>
                          <Link
                            to={`/browse/${item.id}?title=${encodeURIComponent(
                              item.original_name
                            )}`}
                          >
                            <img
                              className="object-cover rounded-lg"
                              alt={item.name}
                              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                            />
                          </Link>
                          <h1 className="mt-2 text-lg text-white">
                            {item.title}
                          </h1>
                        </>
                      )}
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 ml-10">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Airing Today in TV"} movies={movies.airingToday} />
      </div>
    </div>
  );
};

export default RecommendationContainer;