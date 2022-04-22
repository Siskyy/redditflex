import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    /* The subreddit array will be filled with subreddit.data from fetchSubreddits function */
    subreddits: []
};

const redditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {

    }
})

export default redditSlice.reducer;