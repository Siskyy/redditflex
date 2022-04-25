import { createSlice } from '@reduxjs/toolkit';
import { fetchSubredditPosts } from '../api/reddit';

const initialState = {
    posts: [],
    isLoading: false,
    error: false
}

const redditPostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        loadPosts(state) {
            state.isLoading = true;
            state.error = false;
        },
        loadPostSuccess(state, action) {
            state.isLoading = false;
            state.error = false;
            state.posts = action.payload;
        },
        loadPostsFailure(state, action) {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const {
    setPosts,
    loadPosts,
    loadPostSuccess,
    loadPostsFailure
} = redditPostSlice.actions;

export default redditPostSlice.reducer;

/* get the posts from the subreddits using redux thunk */

export const getSubredditPosts = () => async (dispatch) {
    try {
        dispatch(loadPosts());
        const posts = await fetchSubredditPosts();

        /* need to add show comments feature */

        dispatch(loadPostSuccess());
    } catch {
        dispatch(loadPostsFailure());
    }
}