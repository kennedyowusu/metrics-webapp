import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countries from '../../redux/countriesSlice'
import { Link } from 'react-router-dom'


const CountryDetailPage = () => {
 const navigate = useNavigate()
 const { countryName } = useParams()

 const country = countries.find((country) => country.name === countryName)



 useEffect(() => {
  if (!countryName) {
   navigate('/')
  }
 }, [countryName, navigate])


  return (
   <div>
    <h1>Country Detail Page</h1>
    <Link to='/'>Back to Home</Link>

    <h2>{country.name}</h2>
    <h2>{country.capital}</h2>
    

      
    </div>
  )
}

export default CountryDetailPage
