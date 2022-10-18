import { configureStore } from '@reduxjs/toolkit';
import { filtersSlice } from 'redux/filterSlice';
import { contactsSlice } from 'redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filtersSlice.reducer
  },
});

