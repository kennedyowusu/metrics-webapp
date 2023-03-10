import {useState} from 'react'
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
    <div className='flex flex-col items-center justify-start'>
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filteredCountries.map((country) => (
          <Link
            key={country.alpha2Code}
            to={`/details/${country.alpha2Code}`}
            className='p-6 bg-white rounded-lg'
          >
            <img
              src={country.flag}
              alt={country.name}
              className='w-90 h-52 mx-auto border-4 border-gray-200 object-cover'
            />
            <h2 className='text-xl font-medium'>{country.name}</h2>
            <p className='text-sm font-medium'>Capital: {country.capital}</p>
            <p className='text-sm font-medium'>
              Population: {country.population}
            </p>
            <p className='text-sm font-medium'>Area: {country.area} km²</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
