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
          className='flex items-center justify-center w-28 h-10 mr-12 rounded-md text-[2rem] text-white'>
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
