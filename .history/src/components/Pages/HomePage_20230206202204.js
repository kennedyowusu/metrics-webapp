import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectCountryState } from '../../redux/countriesSlice'
import { fetchCountriesAxios } from '../../redux/countriesSlice'

const HomePage = () => {
 const dispatch = useDispatch();
 const countries = useSelector(SelectCountryState());
 const [filteredCountries, setFilteredCountries] = useState([]);

 useEffect(() => {
  dispatch(fetchCountriesAxios());
 }, [dispatch]);
 

 const handleDataSearch = (e) => {
  e.preventDefault();
  setFilteredCountries(e.target.value);
 }

  return (
    <div>
      
    </div>
  )
}

export default HomePage
