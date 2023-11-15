import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlicer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
