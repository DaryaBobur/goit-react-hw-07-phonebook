import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://634e58dc4af5fdff3a595a69.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;  
        } 
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact", async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data; 
        } 
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } 
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
  );