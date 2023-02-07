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
      
    </div>
  )
}

export default SingleCountry
