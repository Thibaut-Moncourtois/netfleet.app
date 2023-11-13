// @ts-nocheck
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=25ae44316b3b86c92878bb2a7fb7e68e";
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=25ae44316b3b86c92878bb2a7fb7e68e&query=";

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(movies);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="App">
      <div className="search_nav">
        <h1 className="title">Netfleet</h1>
        <div className="search_box">
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
