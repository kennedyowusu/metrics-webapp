import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';


const store = configureStore({
 reducer: {
   // Add your reducers here
 }
});

export default store;