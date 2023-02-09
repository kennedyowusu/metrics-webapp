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
    <section>
      <nav
        className="
      bg-white shadow-md fixed top-0 left-0 right-0 z-10 -mt-4
        "
      >
        <div className="py-3 flex items-center justify-start -mt-4 text-center">
          <button
            type="button"
            className="text-xl py-4 hover:text-gray-500 text-start text-teal font-bold
          rounded-lg
        "
            onClick={() => navigate(-1)}
          >
            <FiChevronLeft
              className="
        text-[2.5rem] text-teal-500 ml-2 mr-4 pt-6
        "
            />
          </button>
        </div>
      </nav>
      <div className=" items-center justify-start pt-16
      "
      >
        <div className="p-4 rounded-lg ">

          <img
            src={country.flag}
            alt={country.name}
            className=" w-90 h-52 mx-auto md:full
             md:h-96
        border-4 border-gray-200 object-cover "
          />
          <div className="flex items-center justify-center mt-4 mb-2 text-center bg-teal-500 text-white">
            <h2 className="text-md font-medium p-1 uppercase">
              {country.name}
            </h2>
          </div>
          <div className="flex items-center justify-center mt-4 mb-2 text-center bg-teal-500 text-white">
            <p className="text-md font-medium p-1">
              Capital:
              {' '}
              {country.capital}
            </p>
          </div>
          <div className="flex items-center justify-center mt-4 mb-2 text-center bg-teal-500 text-white">
            <p className="text-md font-medium p-1">
              Population:
              {' '}
              {country.population}
            </p>
          </div>
          <div className="flex items-center justify-center mt-4 mb-2 text-center bg-teal-500 text-white">
            <p className="text-md font-medium p-1">
              Area:
              {' '}
              {country.area}
              {' '}
              km²
            </p>
          </div>
          <div className="flex items-center justify-center mt-4 mb-2 text-center bg-teal-500 text-white">
            <p className="text-md font-medium p-1">
              Region:
              {' '}
              {country.region}
              {' '}
              km²
            </p>
          </div>

          <div className="flex items-center justify-center mt-4 mb-6 text-center bg-teal-500 text-white">
            <p className="text-md font-medium p-1">
              Subregion:
              {' '}
              {country.subregion}
              {' '}
              km²
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
