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
     
    </div>
  )
}

 export default HomePage;
