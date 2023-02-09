import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCountries } from '../utils/axios'

export const fetchCountriesAxios = createAsyncThunk(
  'countries/fetchCountriesAxios',
  async () => {
    try {
      const response = await getCountries('all')
      console.log(response.data);
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

const initialState = {
  countries: [],
  status: null,
}

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
 extraReducers: (builder) => {
  builder.addCase(fetchCountriesAxios.pending, (state) => {
   state.status = 'loading'
  })
  builder.addCase(fetchCountriesAxios.fulfilled, (state, action) => {
   state.status = 'success'
   state.countries = action.payload
  })
  builder.addCase(fetchCountriesAxios.rejected, (state) => {
   state.status = 'failed'
  })
 },
 
   
    // [fetchCountriesAxios.pending]: (state) => {
    //   state.status = 'loading'
    // },
    // [fetchCountriesAxios.fulfilled]: (state, action) => {
    //   state.status = 'success'
    //   state.countries = action.payload
    // },
    // [fetchCountriesAxios.rejected]: (state) => {
    //   state.status = 'failed'
    // },
  },
})

export const SelectCountryState = () => (state) => state.countries
export default countriesSlice.reducer
