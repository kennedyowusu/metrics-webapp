import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import  { instance } from '../../utils/axios';

// const API_URL = 'https://restcountries.com/v2/all';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    // const response = await axios.get(API_URL);
    
    return response.data;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      const updateState = {
        loading: true,
        error: null,
      };
      return { ...state, ...updateState };
    },
    [fetchCountries.fulfilled]: (state, action) => {
      const updateState = {
        countries: action.payload,
        loading: false,
        error: null,
      };
      return { ...state, ...updateState };
    },
    [fetchCountries.rejected]: (state, action) => {
      const updateState = {
        countries: [],
        loading: false,
        error: action.error.message,
      };
      return { ...state, ...updateState };
    },
  },
});

export default countriesSlice.reducer;
