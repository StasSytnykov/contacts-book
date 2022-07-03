import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const contactIndex = state.contacts.findIndex(
        (contact) => contact.id === payload
      );
      state.contacts[contactIndex].status =
        !state.contacts[contactIndex].status;
    },
  },
});

export const { addContact, deleteContact, updateStatus } =
  contactsSlice.actions;

export default contactsSlice.reducer;
