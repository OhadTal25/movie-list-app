import React from "react";
import { Link } from "react-router-dom";
import MovieAttribute from "./MovieAttribute";

const MovieCard = ({ movie }) => (
  <div className="item">
    <Link to={`/movie/${movie.id}`}>
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
      />
      <br />
      {movie.title}
    </Link>
    <MovieAttribute title="Rank" value={movie.vote_average.toFixed(1)} />
  </div>
);

export default MovieCard;
