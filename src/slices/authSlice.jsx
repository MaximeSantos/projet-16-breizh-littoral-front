/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  userToken: null,

};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAsLoggedIn: (state, action) => {
      state.userInfo = action.payload.data;
      state.userToken = action.payload.token;
    },
    setUserAsLoggedOut: (state) => {
      state.userInfo = null;
      state.userToken = null;
    },
  },
});

export const { setUserAsLoggedIn, setUserAsLoggedOut } = authSlice.actions;

export default authSlice.reducer;
