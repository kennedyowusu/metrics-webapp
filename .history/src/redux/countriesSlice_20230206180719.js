import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import 

export const fetchCountries = createAsyncThunk(
 "countries/fetchCountries",
 async () => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();
  return data;
 }