import React from 'react'
import PropTypes from 'prop-types'

const AllCountries = () => {
  return (
    <div className='flex flex-wrap justify-center mt-4'>
      {countries.map((country) => (
       
      </div>
  )
}

AllCountries.protoTypes = {
  countries: PropTypes.array.isRequired,

}

export default AllCountries
