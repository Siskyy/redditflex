import { configureStore } from '@reduxjs/toolkit';

import hardRedditReducer from '../store/hardRedditSlice';
import filterReducer from '../store/filterSlice';
import commentReducer from '../store/commentSlice';

export const store = configureStore({
  reducer: {
    hardSubreddit: hardRedditReducer,
    filter: filterReducer,
    comment: commentReducer,
  },
});
