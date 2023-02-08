import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const DetailsPage = () => {
  const { countries } = useSelector((state) => state.countries);
  const { alpha2Code } = useParams();
  const country = countries.find((c) => c.alpha2Code === alpha2Code);

  if (!country) {
    return <div className="text-center">Country not found</div>;
  }

  return (
    <div className='mx-auto max-w-sm p-6 bg-white rounded-lg'>
      <img src={country.flag} alt={country.name} className="
        w-52 h-32 mx-auto border-4 border-gray-200 object-cover
      " />
      <h2 className='text-2xl font-medium'>{country.name}</h2>
      <p className='text-lg font-medium'>Capital: {country.capital}</p>
      <p className='text-lg font-medium'>Population: {country.population}</p>
      <p className='text-lg font-medium'>Area: {country.area} km²</p>
    </div>
  )
};

export default DetailsPage
