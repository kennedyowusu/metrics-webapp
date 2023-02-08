import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GiGlobe } from 'react-icons/gi';

const HomePage = () => {
  const { countries } = useSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredCountries = countries;
  if (searchTerm) {
    filteredCountries = countries.filter(
      (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  return (
    <div className='flex flex-col items-center justify-start'>
      <div className='flex items-center justify-center py-3'>
        {/* <Icon icon="ph:globe-stand" className="text-teal-500 text-4xl mr-10" /> */}
        <GiGlobe className='text-teal-500 text-4xl mr-10' /> />
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearch}
          className='w-full md:w-64 p-2 rounded-lg border
        border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
          '
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
        {filteredCountries.map((country) => (
          <div key={country.alpha2Code} className='border rounded-lg'>
            <Link to={`/details/${country.alpha2Code}`}>
              <img
                src={country.flag}
                alt={country.name}
                className='w-full h-52 mx-auto border-4 border-gray-200 object-cover'
              />
              <p className=' bg-white rounded text-center text-lg'>
                {country.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
};

export default HomePage;
