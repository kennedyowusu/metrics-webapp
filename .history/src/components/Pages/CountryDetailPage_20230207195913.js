import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countries from '../../redux/countriesSlice'


const CountryDetailPage = () => {
 const navigate = useNavigate()
 const { countryName } = useParams()

 const test = countries.countries.filter((item) => {
  return Object.values(item).join('').toLowerCase().includes(countryName)
 })



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
