import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getCountriesStart: (state) => {
      const updateState = {
        ...state,
        loading: true,
      };
      return updateState;
      // state.loading = true;
    },
    getCountriesSuccess: (state, action) => {
      // state.countries = action.payload;
      // state.loading = false;
      // state.error = null;
      const updateState = {
        ...state,
        countries: action.payload,
        loading: false,
        error: null,
      };
      return updateState;
    },
    getCountriesFailure: (state, action) => {
      // state.loading = false;
      // state.error = action.payload;
      const updateState = {
        ...state,
        loading: false,
        error: action.payload,
      };
      return updateState;
    },
  },
});

export const {
  getCountriesStart, getCountriesSuccess, getCountriesFailure,
} = countriesSlice.actions;

export const fetchCountries = () => async (dispatch) => {
  try {
    dispatch(getCountriesStart());
    const response = await axios.get('https://restcountries.com/v2/all');
    dispatch(getCountriesSuccess(response.data));
  } catch (error) {
    dispatch(getCountriesFailure(error.message));
  }
};

export default countriesSlice.reducer;
