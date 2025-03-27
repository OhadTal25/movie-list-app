import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./Pages/MovieList";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
