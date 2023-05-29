/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { checkIfLoggedIn, getJWTFromLocalStorage } from '../utils/JWT';

const initialState = {
  isLoggedIn: checkIfLoggedIn(),
  token: getJWTFromLocalStorage(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAsLoggedIn: (state) => {
      state.isLoggedIn = true;
      state.token = getJWTFromLocalStorage();
    },
    setUserAsLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { setUserAsLoggedIn, setUserAsLoggedOut } = authSlice.actions;

export default authSlice.reducer;
