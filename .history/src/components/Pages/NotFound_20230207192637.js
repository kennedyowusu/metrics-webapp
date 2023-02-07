import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <h1 className='text-4xl font-bold text-gray-800'>404</h1>
      <h2 className='text-2xl font-bold text-gray-800'>Page Not Found</h2>
      <Link to='/'>
     <button
      
     >Go Back</button>
      </Link>
    </div>
  )
}

export default NotFound
