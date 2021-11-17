import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ movie, openPostReviewForm }) => {
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
        <Link to="/post-review">
          <button
            className="postReviewBtn"
            type="button"
            onClick={openPostReviewFormHandler}
          >
            Post Review
          </button>
        </Link>
        {/* <Link className="postReviewBtn" to="/post-review"> */}
        {/* Post Review */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Movie;
