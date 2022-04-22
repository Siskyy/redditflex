import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    isLoading: false,
    error: false
}

const redditPostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
});

