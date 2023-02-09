import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const DetailsPage = () => {
  const { countries } = useSelector((state) => state.countries);
  const { alpha2Code } = useParams();
  const navigate = useNavigate();
  const country = countries.find((c) => c.alpha2Code === alpha2Code);

  if (!country) {
    return <div className="text-center">Country not found</div>;
  }

  return (
    section
  );
};

export default DetailsPage;
