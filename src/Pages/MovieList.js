import React from "react";
import { useState, useEffect } from "react";
import { fetchMovieList } from "../Services/api";
import MovieCard from "../Components/MovieCard";
import "../Style/MovieList.css";

const MovieList = () => {
  const [list, setList] = useState([]);
  const [searchItem, setSerachItem] = useState("");

  useEffect(() => {
    const getMovieList = async () => {
      const data = await fetchMovieList();
      data.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      setList(data);
    };
    getMovieList();
  }, []);

  const handleSearchChange = (event) => {
    setSerachItem(event.target.value);
  };

  const filteredList = list.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by movie name:"
          value={searchItem}
          onChange={handleSearchChange}
        />
      </div>
      <div className="list">
        {filteredList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
