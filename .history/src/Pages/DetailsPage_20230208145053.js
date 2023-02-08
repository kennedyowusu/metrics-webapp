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
    <div className='flex flex-col items-center justify-start'>
      <button
        className='text-xl p-4 hover:text-gray-500 text-start'
        onClick={() => navigate(-1)}
      >
        &larr;
      </button>
      <div className='mx-auto max-w-sm p-6 bg-white rounded-lg text-center'>
        <img
          src={country.flag}
          alt={country.name}
          className=' w-90 h-52 mx-auto
        border-4 border-gray-200 object-cover '
        />
        <div>
          <h2 className='text-2xl font-medium'>{country.name}</h2>
        </div>
        <p className='text-lg font-medium'>Capital: {country.capital}</p>
        <p className='text-lg font-medium'>Population: {country.population}</p>
        <p className='text-lg font-medium'>Area: {country.area} km²</p>
      </div>
    </div>
  )
}

export default DetailsPage
