import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountries } from "../utils/axios";

// export const fetchCountries = createAsyncThunk(
//  "countries/fetchCountries",
//  async () => {
//   const response = await fetch("https://restcountries.eu/rest/v2/all");
//   const data = await response.json();
//   return data;
//  }
// );

export const fetchCountriesAxios = createAsyncThunk(
 "countries/fetchCountriesAxios",
 async () => {
  const response = await getCountries("/posts");
  return response.data;
 }
);

const countriesSlice = createSlice({
 name: "countries",
 