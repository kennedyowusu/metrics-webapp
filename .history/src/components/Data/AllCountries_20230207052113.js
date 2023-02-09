import React from 'react'
import PropTypes from 'prop-types'

const AllCountries = () => {
  return (
    <div className='flex flex-wrap justify-center mt-4'>
      {countries.map((country) => (
        <div
          key={country.name}
          className='flex flex-col items-center justify-center w-64 h-64 m-4 bg-white rounded-md shadow-md
      </div>
  )
}

AllCountries.protoTypes = {
  countries: PropTypes.array.isRequired,

}

export default AllCountries
