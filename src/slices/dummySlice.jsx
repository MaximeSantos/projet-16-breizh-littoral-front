/* RTK nous permet d'écrire des logiques de mutation dans nos reducers sans que le state
soit réellement muté grâce à ImmerJS */
/* eslint-disable no-param-reassign */

// Ceci est un "dummy Slice" qui nous servira de références pour nos futurs slices

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dummyValue: false,
  dummyValueFromPayload: '',
};

export const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    setDummyValue: (state) => {
      state.dummyValue = !state.dummyValue;
    },
    setDummyValueFromPayload: (state, action) => {
      state.dummyValueFromPayload = action.payload;
    },
  },
});

export const { setDummyValue, setDummyValueFromPayload } = dummySlice.actions;

export default dummySlice.reducer;
