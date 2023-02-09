import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { countries, loading, error } = useSelector((state) => state.countries);

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
            <button type="button">{country.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
