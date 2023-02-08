import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countriee from '../../redux/countriesSlice'


const CountryDetailPage = () => {
 const navigate = useNavigate()
 const { countryName } = useParams()

 const thisCountry = countries.find(
  (country) => country.name === countryName
 )


 useEffect(() => {
  if (!countryName) {
   navigate('/')
  }
 }, [countryName, navigate])


  return (
   <div>
    <h1>Country Detail Page</h1>
    <h2>{countryName}</h2>
    

      
    </div>
  )
}

export default CountryDetailPage
