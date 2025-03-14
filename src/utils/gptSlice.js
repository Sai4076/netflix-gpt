import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        tmdbMovies: [],
        movieName: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieName = movieNames;
            state.tmdbMovies = movieResults;
        }

    }
})

export const {toggleGptSearchView ,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;