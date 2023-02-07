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
   dispatch(fetchCountriesAxios())
   console.log(`Countries: ${countries.length}`)
  }
 }, [countries.length, dispatch])

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
   
   console.log(`Search Value: ${searchValue}`)
  }

  return (
    <div className=''> {
      filteredCountries.length > 0
       ? filteredCountries.map((country) => (
        <div
         key={country.name} 
         className='flex flex-col items-center justify-center w-64 h-64 m-4 bg-white rounded-md shadow-md
         sm:w-72 sm:h-72 sm:m-6 md:w-80 md:h-80 md:m-8 lg:w-96 lg:h-96 lg:m-10 xl:w-104 xl:h-104 xl:m-12 2xl:w-112 2xl:h-112 2xl:m-14
         '
        >
         <img src={country.flag} alt={country.name} className='w-32 h-32' />
         <h1 className='text-xl font-bold'>{country.name}</h1>
         <p className='text-sm'>
          <span className='font-bold'>Population: </span>
          {country.population}
         </p>
         <p className='text-sm'>
          <span className='font-bold'>Region: </span>
          {country.region}
         </p>
         <p className='text-sm'>
          <span className='font-bold'>Capital: </span>
          {country.capital}
         </p>
        </div>
       ))
       : countries.countries.map((country) => (
        <div

         key={country.name}
         className='flex flex-col items-center justify-center w-64 h-64 m-4 bg-white rounded-md shadow-md
         sm:w-72 sm:h-72 sm:m-6 md:w-80 md:h-80 md:m-8 lg:w-96 lg:h-96 lg:m-10 xl:w-104 xl:h-104 xl:m-12 2xl:w-112 2xl:h-112 2xl:m-14
         '
        >
         <img src={country.flag} alt={country.name} className='w-32 h-32' />
         <h1 className='text-xl font-bold'>{country.name}</h1>
         <p className='text-sm'>
          <span className='font-bold'>Population: </span>
          {country.population}
         </p>
         <p className='text-sm'>
          <span className='font-bold'>Region: </span>
          {country.region}
         </p>
         <p className='text-sm'>
          <span className='font-bold'>Capital: </span>
          {country.capital}
         </p>
        </div>
       ))
        }
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
            value={countries.search}
            onChange={handleDataSearch}
          />
        </div>
      </div>

      
    </div>
  )
}

export default HomePage
