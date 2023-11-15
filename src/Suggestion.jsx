import React, { useState } from "react";
import "./MovieCard.css";
import "./App.css";

const Suggestion = (props) => {
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=25ae44316b3b86c92878bb2a7fb7e68e&query=";
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [suggestion, setSuggestion] = useState(false);
  const moviesItems = movies.map((movie) => <li>{movie.title}</li>);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + suggestion)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setSuggestion(true);
      });
  };

  return (
    <div className="info">
      <p className="suggestion_title">{props.title}</p>
      <p className={API_SEARCH + props.title} />
    </div>
  );
};

export default Suggestion;
