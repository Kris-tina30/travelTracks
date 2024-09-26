import { createSlice } from '@reduxjs/toolkit';

const campersSlice = createSlice({
  name: 'campers',

  initialState: { campers: [] },

  reducers: {
    addContact(state, action) {
      state.campers.push(action.payload);
    },
    deleteContact(state, action) {
      state.campers = state.campers.filter(camper => camper.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
