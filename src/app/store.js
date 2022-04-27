import { configureStore } from '@reduxjs/toolkit';

import hardRedditReducer from '../store/hardRedditSlice';
import filterReducer from '../store/filterSlice';

export const store = configureStore({
  reducer: {
    hardSubreddit: hardRedditReducer,
    filter: filterReducer,
  },
});
