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
    if (countries.status === 'idle') {
      dispatch(fetchCountriesAxios())
    }
  }, [countries.status, dispatch])

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
      sm:w-32 sm:h-12 sm:mr-44 sm:text-[2.5rem] md:w-36 md:h-14 md:ml-80 md:text-[3rem] lg:w-40 lg:h-16 lg:mr-96 lg:text-[3.5rem] xl:w-44 xl:h-18 xl:mr-28 xl:text-[4rem] 2xl:w-48 2xl:h-20 2xl:mr-32 2xl:text-[4.5rem]
          '>
          <Icon icon='ph:globe-stand' className='' />
        </div>
        <div className='flex items-center justify-center ml-24 rounded-md'>
          <input
            type='text'
            placeholder='Search for a country'
            className='w-56 h-10 px-4 rounded-md focus:outline-none focus:border-blue-500 p-4'
            onChange={handleDataSearch}
          />
        </div>
      </div>

    </div>
  )
}

export default HomePage
