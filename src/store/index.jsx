import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../slices/dummySlice';
import mainMapModalReducer from '../slices/mainMapModalSlice';
import profileModalReducer from '../slices/profileModalSlice';
import { spotsApi } from '../api/spotsApi';
import { usersApi } from '../api/usersApi';
import { sportsApi } from '../api/sportsApi';
import { difficultesApi } from '../api/difficultesApi';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    mainMapModal: mainMapModalReducer,
    profileModal: profileModalReducer,
    [spotsApi.reducerPath]: spotsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [sportsApi.reducerPath]: sportsApi.reducer,
    [difficultesApi.reducerPath]: difficultesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    spotsApi.middleware,
    usersApi.middleware,
    sportsApi.middleware,
    difficultesApi.middleware,
  ),
});

export default store;
