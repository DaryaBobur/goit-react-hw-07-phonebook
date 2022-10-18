import { createSlice } from '@reduxjs/toolkit'

import { nanoid } from 'nanoid';
// const contactsInitialState = {
//   contacts: [],
// };

// contacts: [
//   items: [],
//   isLoading: false,
//   error: null
// ],
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: {
    items: [],
      isLoading: false,
      error: null
  } },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            ...text,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contacts.items.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
  },
});

export const {addContact, removeContact} = contactsSlice.actions;