import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        toggleComments: false,
        commentsForPost: [],
        darkMode: true,
    },
    reducers: {
        setToggleComments(state, action) {
            state.toggleComments = action.payload;
        },
        setCommentsForPost(state, action) {
            state.commentsForPost = action.payload;
        },
        setDarkMode(state, action) {
            state.darkMode = action.payload;
        },
    }
});

export const {
    setToggleComments,
    setCommentsForPost,
    setDarkMode,
} = commentSlice.actions;

export default commentSlice.reducer;