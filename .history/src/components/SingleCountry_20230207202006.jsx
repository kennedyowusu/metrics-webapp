import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const SingleCountry = ({ country }) => {
 const navigate = useNavigate()

 const handleSingleCountry = () => {
  navigate(`/country/${country.name}`, { state: { country } })
 }
 
  return (
    <div>
    <div className='flex flex-col items-center justify-center w-full h-full'>
     <p>
      <span className='font-bold'>Name:</span> {country.name}
     </p>

     <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={handleSingleCountry}
     >
   </div>
    </div>
  )
}

export default SingleCountry
