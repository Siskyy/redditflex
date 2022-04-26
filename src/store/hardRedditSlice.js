import { createSlice } from "@reduxjs/toolkit";

const initialSubreddits = [
    {
        name: 'askreddit',
    },
    {
        name: 'programming',
    },
    {
        name: 'movies',
    },
    {
        name: 'finance',
    },
];

const initialSelectedSubreddit = 'programming';


export const hardSubredditSlice = createSlice({
    name: 'hardSubreddit',
    initialState: {
        selectedSubreddit: initialSelectedSubreddit,
        subreddits: initialSubreddits,
        searchTerm: '',
    },
    reducers: {
        selectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    }
});

export const {
    selectedSubreddit,
    setSearchTerm,
} = hardSubredditSlice.actions;

export default hardSubredditSlice.reducer;
