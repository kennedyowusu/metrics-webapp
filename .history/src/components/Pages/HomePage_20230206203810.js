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
    {/* put logo and search field side by side */}
    <div className="flex flex-row justify-between">
     <div className="flex flex-row">
      <img
       src="https://www.countryflags.io/US/flat/64.png"
       alt="US Flag"
       className="w-12 h-12"
      />
      <h1 className="text-3xl font-bold text-gray-800">Country Search</h1>
     </div>
     <div className="flex flex-row">
      <input
       type="text"
       placeholder="Search for a country"
       className="w-96 h-10 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
       onChange={handleDataSearch}
      />
      <button className="w-10 h-10 ml-2 bg-blue-500 rounded-lg">
       <Icon icon="ant-design:search-outlined" className="text-white" />
      </button>
      </div>
    </div>
  )
}

 export default HomePage;
