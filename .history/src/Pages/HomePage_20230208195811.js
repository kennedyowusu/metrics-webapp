import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/slices/countriesSlice';

const HomePage = () => {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha2Code}>
          <Link to={`/details/${country.alpha2Code}`}>
            <button type="submit">{country.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
