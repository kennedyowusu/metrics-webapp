import React from 'react'

const AllCountries = () => {
  return (
    <div className='flex flex-wrap justify-center mt-4'>
     {
      filteredCountries.length > 0
       ? filteredCountries.map((country) => (
        <div
         key={country.name} 
         className='flex flex-col items-center justify-center w-64 h-64 m-4 bg-white rounded-md shadow-md
         sm:w-72 sm:h-72 sm:m-6 md:w-80 md:h-80 md:m-8 lg:w-96 lg:h-96 lg:m-10 xl:w-104 xl:h-104 xl:m-12 2xl:w-112 2xl:h-112 2xl:m-14
         '
        >
         <img src={country.flag} alt={country.name} className='w-32 h-32' />
         <h1 className='text-xl font-bold'>{country.name}</h1>
         <p className='text-sm'>
          <span className='font-bold'>Population: </span>
          {country.population}
         </p>
         <p className='text-sm'>
          <span className='font-bold'>Region: </span>
          {country.region}
         </p>
         <p className='text-sm'>
          <span className='font-bold'>Capital: </span>
          {country.capital}
         </p>
        </div>
       ))
       : countries.countries.map((country) => (
        <div

         key={country.name}
         className='flex flex-col items-center justify-center w-64 h-64 m-4 bg-white rounded-md shadow-md
         sm:w-72 sm:h-72 sm:m-6 md:w-80 md:h-80 md:m-8 lg:w-96 lg:h-96 lg:m-10 xl:w-104 xl:h-104 xl:m-12 2xl:w-112 2xl:h-112 2xl:m-14
         '
        >
         <img src={country.flag} alt={country.name} className='w-32 h-32' />
         <h1 className='text-xl font-bold'>{country.name}</h1>
         <p className='text-sm'>
          <span className='font-bold'>Population: </span>
          {country.population}
         </p>
         <p className='text-sm'>
          <span className='font-bold'>Region: </span>
          {country.region}
         </p>
         <p className='text-sm'>
          <span className='font-bold'>Capital: </span>
          {country.capital}
         </p>
        </div>
       ))
        }
      </div>
  )
}

AllCountries.

export default AllCountries
