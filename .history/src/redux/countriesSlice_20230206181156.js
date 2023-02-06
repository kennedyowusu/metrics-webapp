import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountries } from "../utils/axios";


export const fetchCountriesAxios = createAsyncThunk(
 "countries/fetchCountriesAxios",
 async () => {
  const response = await getCountries("/posts");
  return response.data;
 }
);

const initialState = {
 countries: [],
 status: null,
};

const countriesSlice = createSlice({
 name: "countries",
 initialState,
 reducers: {},
 extraReducers: {
  [fetchCountriesAxios.pending]: (state, action) => {
   state.status = "loading";
  },
  [fetchCountriesAxios.fulfilled]: (state, action) => {
   state.status = "success";
   state.countries = action.payload;
  },
  [fetchCountriesAxios.rejected]: (state, action) => {
   state.status = "failed";
  }
 }
});

export default countriesSlice.reducer;
