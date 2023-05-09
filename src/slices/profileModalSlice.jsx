/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayProfileModal: false,
};

export const profileModalSlice = createSlice({
  name: 'profileModal',
  initialState,
  reducers: {
    setDisplayProfileModal: (state) => {
      state.displayProfileModal = !state.displayProfileModal;
    },
  },
});

export const { setDisplayProfileModal } = profileModalSlice.actions;

export default profileModalSlice.reducer;
