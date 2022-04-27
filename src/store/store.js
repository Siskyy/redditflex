import { configureStore, combineReducers } from "@reduxjs/toolkit";

import subredditReducer from './subredditSlice';
import redditPostReducer from './redditPostSlice';
import filterReducer from "./filterSlice";

export default configureStore({
    reducer: combineReducers({
        /* Use reducers */
        redditPost: redditPostReducer,
        subreddits: subredditReducer,
        filter: filterReducer
    })
})