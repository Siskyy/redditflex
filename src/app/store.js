import { configureStore } from '@reduxjs/toolkit';

import hardRedditReducer from '../store/hardRedditSlice';

export const store = configureStore({
  reducer: {
    hardSubreddit: hardRedditReducer,
  },
});
