/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayProfileModal: false,
};

export const profileModalSlice = createSlice({
  name: 'profileModal',
  initialState,
  reducers: {
    toggleDisplayProfileModal: (state) => {
      state.displayProfileModal = !state.displayProfileModal;
    },
  },
});

export const { toggleDisplayProfileModal } = profileModalSlice.actions;

export default profileModalSlice.reducer;
