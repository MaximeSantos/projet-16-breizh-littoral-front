import { configureStore } from '@reduxjs/toolkit';
import dummyReducer from '../slices/dummySlice';
import mainMapModalReducer from '../slices/mainMapModalSlice';
import profileModalReducer from '../slices/profileModalSlice';
import { spotsApi } from '../api/spotsApi';
import { usersApi } from '../api/usersApi';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    mainMapModal: mainMapModalReducer,
    profileModal: profileModalReducer,
    [spotsApi.reducerPath]: spotsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    spotsApi.middleware,
    usersApi.middleware,
  ),
});

export default store;
