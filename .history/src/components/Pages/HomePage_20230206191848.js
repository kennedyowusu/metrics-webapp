import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectCountryState } from '../../redux/countriesSlice'
const HomePage = () => {
 const dispatch = useDispatch();
 const countries = useSelector(SelectCountryState());
 const [filteredCountries, setFilteredCountries] = useState([]);

 useEffect(() => {
  if (countries.length === 0) {
    dispatch
  }
 })

  return (
    <div>
      
    </div>
  )
}

export default HomePage
