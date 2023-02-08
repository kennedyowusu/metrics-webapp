import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://restcountries.com/v2/all';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
);

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  init
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.countries = [];
      state.loading = false;
      state.error = action.error.message;
    });

    // [fetchCountries.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [fetchCountries.fulfilled]: (state, action) => {
    //   state.countries = action.payload;
    //   state.loading = false;
    //   state.error = null;
    // },
    // [fetchCountries.rejected]: (state, action) => {
    //   state.countries = [];
    //   state.loading = false;
    //   state.error = action.error.message;
    // },
  },
});

export default countriesSlice.reducer;