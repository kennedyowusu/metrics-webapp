import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountries } from "./countriesAPI";

export const fetchCountries = createAsyncThunk(
 "countries/fetchCountries",
 async () => {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();
  return data;
 }