import React, { useEffect,useState } from "react";
import Movie from "./Movie";
import "./Movies.css";
// import PostReview from "./PostReview";

const Movies = ({ movies, fetchMovies , openPostReviewForm}) => {
  // const [openPostReview, setOpenPostReview] = useState(false);

  // const openPostReviewForm = () => {
  //   setOpenPostReview(!openPostReview);
  // };

  useEffect(() => {
    fetchMovies();
  }, []);
  // if (openPostReview) {
  //   return <PostReview />;
  // } 
  // else
    return (
      <div className="moviesConatiner">
        {movies.map((item, idx) => (
          <div key={idx}>
            <Movie movie={item} openPostReviewForm={openPostReviewForm} />
          </div>
        ))}
      </div>
    );
};

export default Movies;
