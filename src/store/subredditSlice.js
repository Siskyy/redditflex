import { createSlice } from '@reduxjs/toolkit';
import { fetchSubreddits } from '../api/reddit';

const initialState = {
    /* The subreddit array will be filled with subreddit.data from fetchSubreddits function */
    subreddits: [],
    isLoading: false,
    error: false
};

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        loadState(state) {
            state.isLoading = true;
            state.error = false;
        },
        success(state, action) {
            /* if it loads */
            state.isLoading = false;
            state.error = false;
            /* Loaded successfully so set subreddit array is filled */
            state.subreddits = action.payload;
        },
        failure(state) {
            /* failure to load */
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const {
    loadState, success, failure
} = redditSlice.actions;

export default subredditSlice.reducer;

/* get the subreddits using redux thunk */

export const getSubreddits = () => async (dispatch) => {
    try {
        dispatch(loadState());
        const subreddits = await fetchSubreddits();
        dispatch(success(subreddits));
    } catch (error) {
        dispatch(failure());
    }
};