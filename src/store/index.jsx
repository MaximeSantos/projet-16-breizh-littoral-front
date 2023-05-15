import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../slices/dummySlice';
import mainMapModalReducer from '../slices/mainMapModalSlice';
import profileModalReducer from '../slices/profileModalSlice';
import { spotsApi } from '../api/spotsApi';
import { sportsApi } from '../api/sportsApi';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    mainMapModal: mainMapModalReducer,
    profileModal: profileModalReducer,
    [spotsApi.reducerPath]: spotsApi.reducer,
    [sportsApi.reducerPath]: sportsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    spotsApi.middleware,
    sportsApi.middleware,
  ),
});

export default store;
