import countriesSlice, {
  setCountries,
  setCountry,
  setError,
} from './countriesSlice';

describe('u', () => {
  it('should handle setCountries action', () => {
    const initialState = {
      countries: [],
      country: {},
      error: null,
    };

    const payload = [
      {
        name: 'United States of America',
        capital: 'Washington, D.C.',
        population: 328000000,
        area: 9147500,
      },
      {
        name: 'United Kingdom',
        capital: 'London',
        population: 67000000,
        area: 242495,
      },
    ];

    const nextState = countriesSlice(initialState, setCountries(payload));

    expect(nextState).toEqual({
      countries: payload,
      country: {},
      error: null,
    });
  });

  it('should handle setCountry action', () => {
    const initialState = {
      countries: [],
      country: {},
      error: null,
    };

    const payload = {
      name: 'United States of America',
      capital: 'Washington, D.C.',
      population: 328000000,
      area: 9147500,
    };

    const nextState = countriesSlice(initialState, setCountry(payload));

    expect(nextState).toEqual({
      countries: [],
      country: payload,
      error: null,
    });
  });

  it('should handle setError action', () => {
    const initialState = {
      countries: [],
      country: {},
      error: null,
    };

    const payload = 'Something went wrong';

    const nextState = countriesSlice(initialState, setError(payload));

    expect(nextState).toEqual({
      countries: [],
      country: {},
      error: payload,
    });
  });
});
