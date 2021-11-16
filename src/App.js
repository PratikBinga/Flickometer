import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/Movies";
import Searchbox from "./components/SearchBox";
import useApi from "../src/useApi";
import Footer from "./components/Footer";
import PostReview from "./components/PostReview";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  const {
    selectedMovieData,
    onChangeSearchMovieHandler,
    searchText,
    fetchMovies,
    movies,
  } = useApi("");
  const [openPostReview, setOpenPostReview] = useState(false);

  const openPostReviewForm = () => {
    setOpenPostReview(!openPostReview);
  };

  const onClickHanlderHomePage = () => {
    window.location.href = "/";
  };

  console.log(selectedMovieData, "selectedMovieData");
  if (openPostReview) {
    return (
      <div className="menuBarContainerPostReview">
        {/* <Link to="/">
          {" "}
          <h2> Flick-O-Meter </h2>
        </Link> */}
        <h2 style={{ cursor: "pointer" }} onClick={onClickHanlderHomePage}>
          {" "}
          Flick-O-Meter{" "}
        </h2>
        <PostReview />
      </div>
    );
  } else
    return (
      <Router>
        <div className="App">
          <div className="menuBarContainer">
            {/* <Route path="/" component={App} /> */}
            {/* <Link to="/">
              {" "}
              <h2> Flick-O-Meter </h2>
            </Link> */}
            <h2 style={{ cursor: "pointer" }} onClick={onClickHanlderHomePage}>
              {" "}
              Flick-O-Meter{" "}
            </h2>
            <Searchbox
              onChangeSearchMovieHandler={onChangeSearchMovieHandler}
              selectedMovieData={selectedMovieData}
              searchText={searchText}
            />
          </div>
          <Movies
            fetchMovies={fetchMovies}
            movies={movies}
            openPostReviewForm={openPostReviewForm}
          />
          <Footer />
        </div>
      </Router>
    );
}

export default App;
