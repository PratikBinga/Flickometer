import React from "react";
import "./Movie.css";

const Movie = ({ movie }) => {
  console.log(movie, "movie comp");
  return (
    <div className="movieBox">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
        alt={movie.title}
      />
      <div className="movieDetails">
        <div className="movieTitle">{movie?.title}</div>
        <div className="movieVote">{movie?.vote_average}</div>
      </div>
      <div className="movieOverview">
        <div>{movie.overview}</div>
      </div>
    </div>
  );
};

export default Movie;
