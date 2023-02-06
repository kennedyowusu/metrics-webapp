import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectCountryState } from '../../redux/countriesSlice'
import { fetchCountriesAxios } from '../../redux/countriesSlice'
import { Icon } from '@iconify/react'

const HomePage = () => {
 const dispatch = useDispatch();
 const countries = useSelector(SelectCountryState());
 const [filteredCountries, setFilteredCountries] = useState([]);

 useEffect(() => {
  if (countries.status === "idle") {
   dispatch(fetchCountriesAxios());
  }
 }, [countries.status, dispatch]);


 const handleDataSearch = (e) => {
  e.preventDefault();
  const searchValue = e.target.value.toLowerCase();
  const newFilter = countries.countries.filter((item) => {
   return Object.values(item).join("").toLowerCase().includes(searchValue);
  });
  if (searchValue === "") {
   setFilteredCountries([]);
  } else {
   setFilteredCountries(newFilter);
  }
 };

  return (
    <div>
      <div>
        <div
         className='flex justify-center items-center bg-gray-100'
        >
             <Icon icon='ph:globe-stand' />
        </div>
        <div className='flex justify-center items-center'>
      <input
       type='text'
       placeholder='Search for a country...'
       className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
       onChange={handleDataSearch}
      />
      </div>
      </div>
    </div>
  )
}

 export default HomePage;
