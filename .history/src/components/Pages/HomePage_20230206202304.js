import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectCountryState } from '../../redux/countriesSlice'
import { fetchCountriesAxios } from '../../redux/countriesSlice'

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
  

  return (
    <div>
      
    </div>
  )
}

 export default HomePage;
