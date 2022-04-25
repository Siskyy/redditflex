import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchComments, fetchSubredditPosts } from '../api/reddit';

const initialState = {
    posts: [],
    isLoading: false,
    error: false,
    searchTerm: '',
    selectedSubreddit: '/r/askreddit'
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
        },

        /* Selection Actions */

        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            /* reset search term */
            state.searchTerm = '';
        },

        /* Comments actions */
        /*  */
        showCommentsToggle(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
        },
        setComments(state, action) {
            state.posts[action.payload].showingComments = !state.posts[action.payload].showingComments;
            /* if comments are hidden, return nothing */
            if (!state.posts[action.payload].showingComments) {
                return;
            }
            /* if comments are on show, initiate load comment actions */
            state.posts[action.payload].isLoadingComments = true;
            state.posts[action.payload].error = false;
        },
        loadCommentSuccess(state, action) {
            state.posts[action.payload].isLoadingComments = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        loadCommentFailure(state, action) {
            state.posts[action.payload].isLoadingComments = false;
            state.posts[action.payload].error = false;
        }
    }
});

export const {
    setPosts,
    loadPosts,
    loadPostSuccess,
    loadPostsFailure,
    setSearchTerm,
    setSelectedSubreddit,
    setComments,
    loadCommentSuccess,
    loadCommentFailure
} = redditPostSlice.actions;

export default redditPostSlice.reducer;

/* get the posts from the subreddits using redux thunk */

export const getSubredditPosts = () => async (dispatch) => {
    try {
        dispatch(loadPosts());
        const posts = await fetchSubredditPosts();

        /* need to add show comments feature */

        dispatch(loadPostSuccess());
    } catch (error) {
        dispatch(loadPostsFailure());
    }
};

/* get the comments for the post selected */

export const getComments = (index, link) => async (dispatch) => {
    try {
        dispatch(setComments(index));
        const comments = await fetchComments();
        dispatch(loadCommentSuccess());
    } catch (error) {
        dispatch(loadCommentFailure(index));
    }
};

/* selectors */

const selectPost = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.rediit.searchTerm;

export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

export const selectPosts = createSelector( 
    [selectPost, selectSearchTerm], (posts, searchTerm) => {
        if (searchTerm !== '') {
            return posts.filter((post) => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    }

)