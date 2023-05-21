/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customMarkerCoordinates: null,
};

export const leafletSlice = createSlice({
  name: 'leaflet',
  initialState,
  reducers: {
    setCustomMarkerCoordinates: (state, action) => {
      state.customMarkerCoordinates = action.payload;
    },
  },
});

export const { setCustomMarkerCoordinates } = leafletSlice.actions;

export default leafletSlice.reducer;
