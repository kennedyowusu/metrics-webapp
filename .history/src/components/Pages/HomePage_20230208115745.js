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

css
Copy code

8. Create a new file `DetailsPage.js` in the `src` directory and add the following code to create a details page component:

```javascript
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { countries } = useSelector((state) => state.countries);
  const { alpha2Code } = useParams();
  const country = countries.find((c) => c.alpha2Code === alpha2Code);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
    </div>
  );
};

export default DetailsPage;
In the src/App.js file, add the following code to connect the home and details pages to the Redux store and to add routing using react-router-dom:
javascript
Copy code
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import HomePage from "./HomePage";
import DetailsPage from "./DetailsPage";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:alpha2Code" component={DetailsPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
This is a basic example of consuming the REST Countries API using React and Redux Toolkit, and navigating between the home page and the details page.



