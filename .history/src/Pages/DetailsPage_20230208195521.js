import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { countries } = useSelector((state) => state.countries);
  const { alpha2Code } = useParams();
  const country = countries.find((c) => c.alpha2Code === alpha2Code);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        Capital:
        {' '}
        {country.capital}
      </p>
      <p>
        Population:
        {' '}
        {country.population}
      </p>
      <p>
        Area:
        {' '}
        {country.area}
        {' '}
        km²
      </p>
    </div>
  );
};

export default DetailsPage;
