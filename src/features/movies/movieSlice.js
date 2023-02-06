import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export default movieSlice.reducer;

// to get info from our store
export const getAllMovies = (state) => state.movies.movies;

export const { addMovies } = movieSlice.actions;
