import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../slices/dummySlice';
import modalReducer from '../slices/modalSlice';
import leafletReducer from '../slices/leafletSlice';
import authReducer from '../slices/authSlice';
import { spotsApi } from '../api/spotsApi';
import { usersApi } from '../api/usersApi';
import { sportsApi } from '../api/sportsApi';
import { difficultesApi } from '../api/difficultesApi';
import { favoritesApi } from '../api/favoritesApi';
import { commentsApi } from '../api/commentsApi';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    modal: modalReducer,
    leaflet: leafletReducer,
    auth: authReducer,
    [spotsApi.reducerPath]: spotsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [sportsApi.reducerPath]: sportsApi.reducer,
    [difficultesApi.reducerPath]: difficultesApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    spotsApi.middleware,
    usersApi.middleware,
    sportsApi.middleware,
    difficultesApi.middleware,
    favoritesApi.middleware,
    commentsApi.middleware,
  ),
});

export default store;
