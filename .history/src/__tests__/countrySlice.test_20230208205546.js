// write test for the countryslice
 
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import { fetchCountries } from '../features/country/countrySlice';

describe('Test Components', () => {
 