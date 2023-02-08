// import { createSlice } from '@reduxjs/toolkit'
// // import axios from 'axios'
// import getCountries from '../../utils/axios'

// const initialState = {
//   countries: [],
//   loading: false,
//   error: null,
// }

// const countriesSlice = createSlice({
//   name: 'countries',
//   initialState,
//   reducers: {
//     getCountriesStart: (state) => {
//       state.loading = true
//     },
//     getCountriesSuccess: (state, action) => {
//       state.countries = action.payload
//       state.loading = false
//       state.error = null
//     },
//     getCountriesFailure: (state, action) => {
//       state.loading = false
//       state.error = action.payload
//     },
//   },
// })

// export const { getCountriesStart, getCountriesSuccess, getCountriesFailure } =
//   countriesSlice.actions

// export const fetchCountries = () => async (dispatch) => {
//   try {
//     dispatch(getCountriesStart())
//     // const response = await axios.get('https://restcountries.com/v2/all')
//     const response = await getCountries('all')
//     dispatch(getCountriesSuccess(response.data))
//     console.log(response.data)
//   } catch (error) {
//     dispatch(getCountriesFailure(error.message))
//   }
// }

// export default countriesSlice.reducer

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// const API_URL = 'https://restcountries.com/v2/all'

// export const fetchCountries = createAsyncThunk(
//   'countries/fetchCountries',
//   async () => {
//     const response = await axios.get(API_URL)
//     return response.data
//   }
// )

// const countriesSlice = createSlice({
//   name: 'countries',
//   initialState: {
//     countries: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchCountries.pending]: (state) => {
//       state.loading = true
//       state.error = null
//     },
//     [fetchCountries.fulfilled]: (state, action) => {
//       state.countries = action.payload
//       state.loading = false
//       state.error = null
//     },
//     [fetchCountries.rejected]: (state, action) => {
//       state.countries = []
//       state.loading = false
//       state.error = action.error.message
//     },
//   },
// })

// export default countriesSlice.reducer

