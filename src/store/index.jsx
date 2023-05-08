import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../slices/dummySlice';
import mainMapModalReducer from '../slices/mainMapModalSlice';
import profileModalReducer from '../slices/profileModalSlice';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    mainMapModal: mainMapModalReducer,
    profileModal: profileModalReducer,
  },
});

export default store;
