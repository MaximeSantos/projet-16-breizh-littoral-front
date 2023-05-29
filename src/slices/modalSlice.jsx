/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayProfileModal: false,
  displayMainMapModal: false,
  displayMenuModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleDisplayProfileModal: (state) => {
      state.displayProfileModal = !state.displayProfileModal;
    },
    toggleDisplayMainMapModal: (state) => {
      state.displayMainMapModal = !state.displayMainMapModal;
    },
    toggleDisplayMenuModal: (state) => {
      state.displayMenuModal = !state.displayMenuModal;
    },
  },
});

export const {
  toggleDisplayProfileModal,
  toggleDisplayMainMapModal,
  toggleDisplayMenuModal,
} = modalSlice.actions;

export default modalSlice.reducer;
