import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const CountryDetailPage = () => {
 const { countryName } = useParams()
 const navigate = useNavigate()

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
