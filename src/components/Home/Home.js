import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import moviesApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/MoviesApiKey";
import { addMovies } from "../../features/movies/movieSlice";
import MoviesListing from "../MoviesListing/MoviesListing";

const Home = () => {
  const Search = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await moviesApi.get(
          `?apikey=${ApiKey}&s=${Search}&type=movie`
        );
        console.log(data);
        dispatch(addMovies(data));
      } catch (error) {
        console.log("Error Message : ", error);
      }
    };
    fetchMovies();
  });
  return (
    <div>
      <MoviesListing />
    </div>
  );
};

export default Home;
