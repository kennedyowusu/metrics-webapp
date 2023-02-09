import countriesSlice from '../redux/slices/countriesSlice';

describe('countriesSlice', () => {
  describe('reducers', () => {
    it('should handle fetchCountries.pending', () => {
      const state = { countries: [], loading: false, error: null };
      const updatedState = countriesSlice.reducer(
        state,
        fetchCountrie.pending(),
      );
      expect(updatedState).toEqual({
        countries: [],
        loading: true,
        error: null,
      });
    });

    it('should handle fetchCountries.fulfilled', () => {
      const state = { countries: [], loading: true, error: null };
      const payload = [{ name: 'United States' }, { name: 'Canada' }];
      const updatedState = countriesSlice.reducer(
        state,
        fetchCountries.fulfilled(payload),
      );
      expect(updatedState).toEqual({
        countries: payload,
        loading: false,
        error: null,
      });
    });

    it('should handle fetchCountries.rejected', () => {
      const state = { countries: [], loading: true, error: null };
      const error = new Error('Network error');
      const updatedState = countriesSlice.reducer(
        state,
        fetchCountries.rejected(error),
      );
      expect(updatedState).toEqual({
        countries: [],
        loading: false,
        error: error.message,
      });
    });
  });
});
