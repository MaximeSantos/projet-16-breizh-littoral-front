/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addNewSpotCustomMarkerCoordinates: null,
  editSpotCustomMarkerCoordinates: null,
};

export const leafletSlice = createSlice({
  name: 'leaflet',
  initialState,
  reducers: {
    setAddNewSpotCustomMarkerCoordinates: (state, action) => {
      state.addNewSpotCustomMarkerCoordinates = action.payload;
    },
    setEditSpotCustomMarkerCoordinates: (state, action) => {
      state.editSpotCustomMarkerCoordinates = action.payload;
    },
  },
});

export const {
  setAddNewSpotCustomMarkerCoordinates,
  setEditSpotCustomMarkerCoordinates,
} = leafletSlice.actions;

export default leafletSlice.reducer;
