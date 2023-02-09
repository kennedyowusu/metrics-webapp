import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectCountryState } from '../../redux/countriesSlice'

const HomePage = () => {
 const { searchData, setSearchData } = useState('');
 const dispatch = useDispatch();
 const countries = useSelector(SelectCountryState());
  return (
    <div>
      
    </div>
  )
}

export default HomePage
