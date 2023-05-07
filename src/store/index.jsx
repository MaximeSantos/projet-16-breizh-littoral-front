import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../slices/dummySlice';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});

export default store;
