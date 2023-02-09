import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from 
 
describe('countriesSlice', () => {
  it('handles fetchCountries.pending', () => {
    const store = configureStore({
      reducer: countriesSlice,
    });

    store.dispatch({ type: 'countries/fetchCountries/pending' });
    const { countries, loading, error } = store.getState().countries;
    expect(countries).toEqual([]);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  it('handles fetchCountries.fulfilled', () => {
    const store = configureStore({
      reducer: countriesSlice,
    });

    const countries = [
      { name: 'United States of America', alpha2Code: 'US' },
      { name: 'United Kingdom', alpha2Code: 'UK' },
    ];
    store.dispatch({
      type: 'countries/fetchCountries/fulfilled',
      payload: countries,
    });
    const { loading, error } = store.getState().countries;
    expect(store.getState().countries.countries).toEqual(countries);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('handles fetchCountries.rejected', () => {
    const store = configureStore({
      reducer: countriesSlice,
    });

    const error = new Error('Failed to fetch countries');
    store.dispatch({ type: 'countries/fetchCountries/rejected', error });
    const { countries, loading } = store.getState().countries;
    expect(countries).toEqual([]);
    expect(loading).toBe(false);
    expect(store.getState().countries.error).toEqual(error.message);
  });
});
