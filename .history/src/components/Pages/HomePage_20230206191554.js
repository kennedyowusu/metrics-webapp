import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'


const HomePage = () => {
 const { searchData, setSearchData } = useState('');
 const dispatch = useDispatch();
 const countries = useSelector(SelectCountryState());
 const [filteredCountries, setFilteredCountries] = useState([]);
  return (
    <div>
      
    </div>
  )
}

export default HomePage
