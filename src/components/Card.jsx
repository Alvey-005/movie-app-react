import React from "react";
import "./Card.scss";
function Card({ movie }) {
  return (
    <div className="card">
      <div className="image">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      </div>
      <div className="description">
        <div className="title">{movie.original_title}</div>
        <div className="release-date">{movie.release_date}</div>
      </div>
    </div>
  );
}

export default Card;
