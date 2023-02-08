import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../store/slices/countriesSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) {
return <div>Loading...</div>;
}

if (error) {
return <div>{error}</div>;
}

return (
<div>
  {countries.map((country) => (
    <div key={country.alpha2Code}>
    <Link to={/details/${country.alpha2Code}}>
    <button>{country.name}</button>
    </Link>
    </div>
  ))}
  </div>
);
};

export default HomePage;