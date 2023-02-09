import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full
    sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
    '>
      <h1 className='text-4xl font-bold text-gray-800'>404</h1>
      <h2 className='text-2xl font-bold text-gray-800'>Page Not Found</h2>
      <Link to='/'>
     <button
        className='px-4 py-2 mt-4 text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600'
     >Go Back</button>
      </Link>
    </div>
  )
}

export default NotFound
