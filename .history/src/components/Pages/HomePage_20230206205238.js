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
    <div className='flex'>
      <div className='flex bg-teal-800'>
        <Icon icon='ph:globe-stand' />
        
    </div>
    <div>
          <input
            type='text'
            placeholder='Search for a country'
            className='w-96 h-10 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
            onChange={handleDataSearch}
          />
          <button className='w-10 h-10 ml-2 bg-blue-500 rounded-lg'>
            <Icon icon='ant-design:search-outlined' className='text-white' />
          </button>
        </div>
      <h2>Hello</h2>
    </div>
  )
}

export default HomePage
