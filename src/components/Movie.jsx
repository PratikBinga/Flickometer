import React, { useState } from "react";
import "./Movie.css";


const Movie = ({ movie, openPostReviewForm }) => {
  // const [openPostReview, setOpenPostReview] = useState(false);

  const openPostReviewFormHandler = () => {
    openPostReviewForm();
  };

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
        <button
          className="postReviewBtn"
          type="button"
          onClick={openPostReviewFormHandler}
        >
          Post Review
        </button>
      </div>
    </div>
  );
};

export default Movie;
