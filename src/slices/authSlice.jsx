/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { checkIfLoggedIn } from '../utils/JWT';

const isJWTInLocalStorage = checkIfLoggedIn();

const initialState = {
  isLoggedIn: isJWTInLocalStorage,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAsLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setUserAsLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setUserAsLoggedIn, setUserAsLoggedOut } = authSlice.actions;

export default authSlice.reducer;
