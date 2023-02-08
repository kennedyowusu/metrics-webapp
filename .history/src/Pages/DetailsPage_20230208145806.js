import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

const DetailsPage = () => {
  const { countries } = useSelector((state) => state.countries)
  const { alpha2Code } = useParams()
  const navigate = useNavigate()
  const country = countries.find((c) => c.alpha2Code === alpha2Code)

  if (!country) {
    return <div className='text-center'>Country not found</div>
  }

  return (
    <div className='flex flex-col items-center justify-start '>
      <div
        className='flex items-start justify-start mt-4 mb-2 text-center 
      '
      >
        <button
          className='text-xl p-4 hover:text-gray-500 text-start text-white
          bg-teal-400 rounded-lg
        '
          onClick={() => navigate(-1)}
        >
          &larr;
        </button>
      </div>
      <div className='mx-auto max-w-sm p-6 rounded-lg bg-teal-400'>
        <img
          src={country.flag}
          alt={country.name}
          className=' w-90 h-52 mx-auto
        border-4 border-gray-200 object-cover '
        />
        <div className='flex items-center justify-center mt-4 mb-2 text-center bg-teal-700 text-white'>
          <h2 className='text-md font-medium p-1'>{country.name}</h2>
        </div>
        <div className='flex items-center justify-center mt-4 mb-2 text-center bg-teal-700 text-white'>
          <p className='text-md font-medium p-1'>Capital: {country.capital}</p>
        </div>
        <div className='flex items-center justify-center mt-4 mb-2 text-center bg-teal-700 text-white'>
          <p className='text-md font-medium p-1'>
            Population: {country.population}
          </p>
        </div>
        <div className='flex items-center justify-center mt-4 mb-2 text-center bg-teal-700 text-white'>
          <p className='text-md font-medium p-1'>Area: {country.area} km²</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
