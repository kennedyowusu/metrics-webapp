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
     
    </div>
  )
}

export default SingleCountry
