import React from "react";

//This component in React is designed to display a movie poster image
const Poster = ({ movie }) => (
  <div className="poster-image">
    <img
      className="img"
      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      alt={movie.title}
    />
  </div>
);

export default Poster;
