import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectCountryState } from '../../redux/countriesSlice'
import { fetchCountriesAxios } from '../../redux/countriesSlice'
import { Icon } from '@iconify/react'

const HomePage = () => {
  const dispatch = useDispatch()
  const countries = useSelector(SelectCountryState())
  const [filteredCountries, setFilteredCountries] = useState([])

 useEffect(() => {
  if (countries.length === 0) {
    
  }

  const handleDataSearch = (e) => {
    e.preventDefault()
    const searchValue = e.target.value.toLowerCase()
    const newFilter = countries.countries.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchValue)
    })
    if (searchValue === '') {
      setFilteredCountries([])
    } else {
      setFilteredCountries(newFilter)
    }
  }

  return (
    <div className=''>
      <div className='flex bg-teal-800 p-2'>
        <div
          className='flex items-center justify-center w-28 h-10 mr-12 rounded-md text-[2rem] text-white 
      sm:w-32 sm:h-12 sm:mr-16 sm:text-[2.5rem] md:w-36 md:h-14 md:mr-20 md:text-[3rem] lg:w-40 lg:h-16 lg:mr-24 lg:text-[3.5rem] xl:w-44 xl:h-18 xl:mr-28 xl:text-[4rem] 2xl:w-48 2xl:h-20 2xl:mr-32 2xl:text-[4.5rem]
          '
        >
          <Icon icon='ph:globe-stand' className='' />
        </div>
        <div
          className='flex items-center justify-center ml-4 rounded-md
        sm:ml-32 md:ml-56 lg:ml-96 lg:text-2xl xl:ml-56 2xl:ml-64
        '
        >
          <input
            type='text'
            placeholder='Search for a country'
            className='w-64 h-10 px-4 rounded-md focus:outline-none focus:border-blue-500 p-4 text-md
            sm:w-64 sm:h-12 sm:px-6 md:w-72 md:h-14 md:px-8 lg:w-80 lg:h-16 lg:px-10 xl:w-88 xl:h-18 xl:px-12 2xl:w-96 2xl:h-20 2xl:px-14
            '
            onChange={handleDataSearch}
          />
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-4'>
        {filteredCountries.map((country) => (
          <div
            key={country.name}
            className='flex flex-col items-center justify-center w-64 h-64 m-4 bg-white rounded-md shadow-md
       sm:w-72 sm:h-72 sm:m-6 md:w-80 md:h-80 md:m-8 lg:w-88 lg:h-88 lg:m-10 xl:w-96 xl:h-96 xl:m-12 2xl:w-104 2xl:h-104 2xl:m-14
       '
          >
            <div
              className='flex items-center justify-center w-32 h-32 mt-4 rounded-md
       sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52
       '
            >
              <img src={country.flag} alt={country.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
