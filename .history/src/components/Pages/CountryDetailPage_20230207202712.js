import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countries from '../../redux/countriesSlice'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const CountryDetailPage = () => {
 const navigate = useNavigate()
 const { id } = useParams()

 const country = countries.find((country) => country.id === id)

 if (!country) {
  navigate('/404')
 }

  return (
   <div>
    {/* <h1>Country Detail Page</h1>
    <Link to='/'>
     <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
     >Back to Home</button>
    </Link>

    <h2>{country.name}</h2>
    <h2>{country.capital}</h2> */}
    
    <div className='flex flex-col items-center justify-center w-full h-full'>
     <p>
      <span className='font-bold'>Name:</span> {country.name}
     </p>
     </div>
      
    </div>
  )
}

export default CountryDetailPage
