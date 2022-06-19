import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: [],
};

export const contactsSlice = createSlice({
  name: "contats",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
