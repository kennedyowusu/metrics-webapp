import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const CountryDetailPage = () => {
 const { countryName } = useParams()
 const navigate = useNavigate()

 React.useEffect(() => {
   
  return (
   <div>
    <h1>Country Detail Page</h1>

      
    </div>
  )
}

export default CountryDetailPage
