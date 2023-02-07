import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import countries from '../../redux/countriesSlice'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const CountryDetailPage = () => {
 const navigate = useNavigate()
 const { countryName } = useParams()
 const location = useLocation()

 const country = countries.find((country) => country.name === countryName)



 useEffect(() => {
  if (!countryName) {
   navigate('/')
  }
 }, [countryName, navigate])


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
     <div className='flex flex-col items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center justify-center w-full h-full'>
       <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='flex flex-col items-center justify-center w-full h-full'>
         <div className='flex flex-col items-center justify-center w-full h-full'>
           

      
    </div>
  )
}

export default CountryDetailPage
