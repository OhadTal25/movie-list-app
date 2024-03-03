// Import necessary elements from React, React Router, and local files
import React from "react";
import { Link } from "react-router-dom";
import MovieAttribute from "./MovieAttribute";
import "../Style/MovieList.css";
import Poster from "./Poster";

// MovieCard functional component to display each movie's card
const MovieCard = ({ movie }) => (
  <div className="item">
    {/* Link component from React Router to navigate to the movie's detail page */}
    <Link to={`/movie/${movie.id}`}>
      {/* Poster component displaying the movie's poster */}
      <Poster movie={movie} />
      <br />
      {movie.title}
    </Link>
    {/* MovieAttribute component displaying the movie's rank */}
    <MovieAttribute title="Rank" value={movie.vote_average.toFixed(1)} />
  </div>
);

// Export the MovieCard component for use in other parts of the application
export default MovieCard;
