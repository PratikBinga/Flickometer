import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/Movies";
import Searchbox from "./components/SearchBox";
import useApi from "../src/useApi";

function App() {
  const {
    selectedMovieData,
    onChangeSearchMovieHandler,
    searchText,
    fetchMovies,
    movies,
  } = useApi("");

  console.log(selectedMovieData, "selectedMovieData");
  return (
    <div className="App">
      <div className="menuBarContainer">
        <h2> Flick-O-Meter </h2>
        <Searchbox
          onChangeSearchMovieHandler={onChangeSearchMovieHandler}
          selectedMovieData={selectedMovieData}
          searchText={searchText}
        />
      </div>
      <Movies fetchMovies={fetchMovies} movies={movies} />
    </div>
  );
}

export default App;
