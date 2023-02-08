import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const { countries, loading, error } = useSelector((state) => state.countries)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h2 className='text-2xl text-black'>Home Page</h2>
      {countries.map((country) => (
        <div key={country.alpha2Code}>
          <Link to={`/details/${country.alpha2Code}`}>
            <button>{country.name}</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HomePage
