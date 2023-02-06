import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesListing.scss";

const MoviesListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MoviesCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">{movies.error}</div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MoviesListing;
