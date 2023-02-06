import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountries } from "../utils/axios";

export const fetchCountriesAxios = createAsyncThunk(
 "countries/fetchCountriesAxios",
 async () => {
  try {
   const response = await getCountries("/all");
   return response.data;
  }
  catch (error) {
   console.log(error);
  }
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
  [fetchCountriesAxios.pending]: (state) => {
   state.status = "loading";
  },
  [fetchCountriesAxios.fulfilled]: (state, action) => {
   state.status = "success";
   state.countries = action.payload;
  },
  [fetchCountriesAxios.rejected]: (state) => {
   state.status = "failed";
  }
 }
});

export default countriesSlice.reducer;
export const selectCountryState = () => 
