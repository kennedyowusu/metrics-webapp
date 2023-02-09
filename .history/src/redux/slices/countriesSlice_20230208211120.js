import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../utils/axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await instance.get('/all');
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
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      const updateState = {
        loading: true,
        error: null,
      };
      return { ...state, ...updateState };
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      const updateState = {
        countries: action.payload,
        loading: false,
        error: null,
      };
      return { ...state, ...updateState };
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      const updateState = {
        
    // [fetchCountries.pending]: (state) => {
    //   const updateState = {
    //     loading: true,
    //     error: null,
    //   };
    //   return { ...state, ...updateState };
    // },
    // [fetchCountries.fulfilled]: (state, action) => {
    //   const updateState = {
    //     countries: action.payload,
    //     loading: false,
    //     error: null,
    //   };
    //   return { ...state, ...updateState };
    // },
    // [fetchCountries.rejected]: (state, action) => {
    //   const updateState = {
    //     countries: [],
    //     loading: false,
    //     error: action.error.message,
    //   };
    //   return { ...state, ...updateState };
    // },
  },
});

export default countriesSlice.reducer;
