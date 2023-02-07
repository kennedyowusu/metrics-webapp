import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countries from '../../redux/countriesSlice'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const CountryDetailPage = () => {
 const navigate = useNavigate()
 const { id } = useParams()

 const country = countries.find((country) => country.id === id)

 useEffect(() => {
  if (!country) {
   navigate('/404')
  }
 }, [country, navigate])


  return (
   <div>
    
    <div className='flex flex-col items-center justify-center w-full h-full'>
     <p>
      <span className='font-bold'>Name:</span> {country.name}
     </p>
     </div>
      
    </div>
  )
}

export default CountryDetailPage
