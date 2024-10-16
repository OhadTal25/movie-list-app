//Import necessary React hooks and components 
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../Services/api";
import BackButton from "../Components/BackButton";
import MovieAttribute from "../Components/MovieAttribute";
import Poster from "../Components/Poster";
import "../Style/MovieDetail.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //Retrieves the id parameter from the URL to fetch specific movie details  
  const { id } = useParams();

  //Performs the API call when the component mounts or the id changes, with error handling and loading state updates  
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

  //Displays loading, error, or movie details based on the current state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>No movie details available.</div>;

  return (
    <>
      {/* Provides a navigation back button */}
      <BackButton />
      <div className="details">
        {movie.poster_path && <Poster movie={movie} />}
        {/* Renders movie attributes dynamically using the MovieAttribute component */}
        <MovieAttribute title="Rank" value={movie.vote_average.toFixed(1)} />
        <MovieAttribute
          title="Genres"
          value={movie.genres.map((genre) => genre.name).join(", ")}
        />
        <MovieAttribute title="Overview" value={movie.overview} />
        <br />
        {/* Filters the production companies to exclude null logo paths and maps over them to display logos */}
        {movie.production_companies
          .filter((producer) => producer.logo_path !== null)
          .map((producer) => (
            <img
              src={`https://image.tmdb.org/t/p/w200/${producer.logo_path}`}
              alt={producer.name}
            />
          ))}
      </div>
    </>
  );
};
export default MovieDetails;
