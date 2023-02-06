import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
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
  const shows = useSelector(getAllShows);
  let renderShows = "";
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MoviesCard key={index} data={show} />)
    ) : (
      <div className="shows-error">{movies.error}</div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MoviesListing;
