import moviesApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/MoviesApiKey";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    try {
      const { data } = await moviesApi.get(
        `?apikey=${ApiKey}&s=${term}&type=movie`
      );
      return data;
    } catch (error) {
      console.log("Error Message : ", error);
    }
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    try {
      const { data } = await moviesApi.get(
        `?apikey=${ApiKey}&s=${term}&type=series`
      );
      return data;
    } catch (error) {
      console.log("Error Message : ", error);
    }
  }
);

export const fetchAsyncMovieOrShow = createAsyncThunk(
  "movies/fetchAsyncMovieOrShow",
  async (id) => {
    try {
      const { data } = await moviesApi.get(
        `?apikey=${ApiKey}&i=${id}&Plot=full`
      );
      return data;
    } catch (error) {
      console.log("Error Message : ", error);
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShow.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, selectedMovieOrShow: payload };
    },
    [fetchAsyncMovies.failed]: () => {
      console.log("rejected");
    },
  },
});

export default movieSlice.reducer;

// to get info from our store
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMoviesOrShow = (state) =>
  state.movies.selectedMovieOrShow;

// export const { addMovies } = movieSlice.actions;
export const { removeSelectedMovieOrShow } = movieSlice.actions;
