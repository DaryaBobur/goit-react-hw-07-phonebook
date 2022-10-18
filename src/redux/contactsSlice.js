import { createSlice } from '@reduxjs/toolkit'
import {  persistReducer } from 'redux-persist'
import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
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
      const index = state.contacts.findIndex(contact => contact.id === action.payload);
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
}
  
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const {addContact, removeContact} = contactsSlice.actions;