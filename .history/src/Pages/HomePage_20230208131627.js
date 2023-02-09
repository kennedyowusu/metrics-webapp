import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from '../redux/slices/countriesSlice'

const HomePage = () => {
  const { countries, loading, error } = useSelector((state) => state.countries)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  if (loading) {
    return <div className='text-center'>Loading...</div>
  }

  if (error) {
    return <div className='text-center'>{error}</div>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
      {countries.map((country) => (
        <div key={country.alpha2Code}
          className='mx-auto max-w-sm bg-white rounded-lg'
        >
          <Link to={`/details/${country.alpha2Code}`}>
            <img src={country.flag} alt={country.name}
            
              className='w-full h-52 mx-auto border-4 border-gray-200 object-cover'
            />
            <p className='p-4 bg-white hover:bg-gray-300 rounded text-center text-lg'>
              {country.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HomePage
