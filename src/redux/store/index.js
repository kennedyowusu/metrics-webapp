import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../slices/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
