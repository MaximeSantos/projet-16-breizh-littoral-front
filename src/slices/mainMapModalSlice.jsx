/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayMainMapModal: false,
};

export const mainMapModalSlice = createSlice({
  name: 'mainMapModal',
  initialState,
  reducers: {
    toggleDisplayMainMapModal: (state) => {
      state.displayMainMapModal = !state.displayMainMapModal;
    },
  },
});

export const { toggleDisplayMainMapModal } = mainMapModalSlice.actions;

export default mainMapModalSlice.reducer;
