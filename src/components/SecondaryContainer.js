import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="w-screen bg-zinc-900">
        <div className="relative z-20 pl-4 mt-0 md:-mt-52 md:pl-12">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingmovies} />
          <MovieList title={"Airing Today in TV"} movies={movies.airingToday} />
          <MovieList title={"Popular TV Shows"} movies={movies.popularTV} />
          <MovieList title={"Top Rated TV Shows"} movies={movies.topRatedTV} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;