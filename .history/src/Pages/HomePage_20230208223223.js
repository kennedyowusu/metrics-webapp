import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GiGlobe } from 'react-icons/gi';
import { fetchCountries } from '../redux/slices/countriesSlice';

const HomePage = () => {
  const { countries } = useSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

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
    m
  );
};

export default HomePage;
