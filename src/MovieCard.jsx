import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="card">
      <div className="poster">
        <img src={API_IMG + props.poster_path} />
      </div>

      <div className="info">
        <p className="title">{props.title}</p>
      </div>

      <div className="overview">
        <h2 className="title_overview">Résumé</h2>
        <h3 className="overview_info">{props.overview}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
