import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from '../'

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
})

export default store
