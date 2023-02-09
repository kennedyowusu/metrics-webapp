import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailsPage from '../src/components/'
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div
      className="w-full"
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/details/:alpha2Code' element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import store from './store'
// import HomePage from './HomePage'
// import DetailsPage from './DetailsPage'

// const App = () => (
//   <Provider store={store}>
//     <Router>
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/details/:alpha2Code' component={DetailsPage} />
//       </Switch>
//     </Router>
//   </Provider>
// )

// export default App