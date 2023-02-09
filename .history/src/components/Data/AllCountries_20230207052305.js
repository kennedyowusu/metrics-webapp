import React from 'react'
import PropTypes from 'prop-types'

const AllCountries = ({countries}) => {
  return (
    <div className='flex flex-wrap justify-center mt-4'>
      {countries.map((country) => (
        <div
          key={country.name}
          className='flex flex-col items-center justify-center w-64 h-64 m-4 bg-white rounded-md shadow-md
        sm:w-72 sm:h-72 sm:m-6 md:w-80 md:h-80 md:m-8 lg:w-96 lg:h-96 lg:m-10 xl:w-104 xl:h-104 xl:m-12 2xl:w-112 2xl:h-112 2xl:m-14
        '
        >
          <div className='flex items-center justify-center w-56 h-56 m-4 rounded-md shadow-md'>
            <img
              src={country.flag}
              alt={country.name}
              className='w-56 h-56 rounded-md'
            />
            <div className='flex flex-col items-center justify-center w-56 h-56 m-4 rounded-md shadow-md'>
              <h1 className='text-xl font-bold text-center'>
                {country.name}
              </h1>
              <p className='text-sm text-center'>
                Population: {country.population}
              </p>
              <p className='text-sm text-center'>
                Region: {country.region}
              </p>
              <p className='text-sm text-center'>
                Capital: {country.capital}
              </p>
              <p

      </div>
  )
}

AllCountries.protoTypes = {
  countries: PropTypes.array.isRequired,

}

export default AllCountries
