import { configureStore } from '@reduxjs/toolkit';
import universitiesReducer from './universitiesSlice';

const store = configureStore({
  reducer: {
    universities: universitiesReducer,
  },
});

export default store;
