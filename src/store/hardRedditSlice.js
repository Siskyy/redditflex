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
        subSearchTerm: '',
    },
    reducers: {
        selectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSubSearchTerm(state, action) {
            state.subSearchTerm = action.payload;
        }
    }
});

export const {
    selectedSubreddit,
    setSearchTerm,
    setSubSearchTerm,
} = hardSubredditSlice.actions;

export default hardSubredditSlice.reducer;
