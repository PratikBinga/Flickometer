import React, { useEffect } from "react";
import Movie from "./Movie";
import "./Movies.css";

const Movies = ({ movies, fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="moviesConatiner">
      {movies.map((item, idx) => (
        <div key={idx}>
          <Movie movie={item} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
