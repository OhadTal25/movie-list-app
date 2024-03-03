//Import necessary React hooks and components
import { React, useState, useEffect } from "react";
import { fetchMovieList } from "../Services/api";
import MovieCard from "../Components/MovieCard";
import "../Style/MovieList.css";

// Defines the MovieList functional component
const MovieList = () => {
  //Initializes state variables for the movie list and search input
  const [list, setList] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    //Asynchronously fetches movie data and sorts it by release date
    const getMovieList = async () => {
      const data = await fetchMovieList();
      data.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      setList(data);
    };
    getMovieList();
  }, []);

  //Updates the search input state when the user types in the search box
  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
  };

  //Filters the movie list based on the user's search input
  const filteredList = list.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search movie name:🍿"
          value={searchItem}
          onChange={handleSearchChange}
        />
      </div>
      {/* Maps over the filtered list of movies to render individual MovieCard components */}
      <div className="list">
        {filteredList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
