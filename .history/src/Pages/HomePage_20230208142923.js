import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from '../redux/slices/countriesSlice'

const HomePage = () => {
  const { countries } = useSelector((state) => state.countries)
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  let filteredCountries = countries
  if (searchTerm) {
    filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
      <div className='flex items-center justify-center mb-6'>
        <img
          src='https://via.placeholder.com/100x100'
          alt='Logo'
          className='w-16 h-16 mr-2 hidden md:inline'
        />
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearch}
          className='w-full md:w-64 p-2 rounded-lg'
        />
      </div>
      {countries.map((country) => (
        <div key={country.alpha2Code} className='border rounded-lg'>
          <Link to={`/details/${country.alpha2Code}`}>
            <img
              src={country.flag}
              alt={country.name}
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
