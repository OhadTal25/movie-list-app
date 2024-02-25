import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../Services/api";
import BackButton from "../Components/BackButton";
import MovieAttribute from "../Components/MovieAttribute";
import "../Style/MovieDetail.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const dataDetails = await fetchMovieDetails(id);
        setMovie(dataDetails);
      } catch (error) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>No movie details available.</div>;
  return (
    <>
      <BackButton />
      <div className="details">
        {movie.poster_path && (
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <MovieAttribute title="Rank" value={movie.vote_average.toFixed(1)} />
        <MovieAttribute
          title="Genres"
          value={movie.genres.map((genre) => genre.name).join(", ")}
        />
        <MovieAttribute title="Overview" value={movie.overview} />
      </div>
    </>
  );
};
export default MovieDetails;
