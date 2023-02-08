import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import HomePage from './HomePage'
import DetailsPage from './DetailsPage'

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/details/:alpha2Code' component={DetailsPage} />
      </Switch>
    </Router>
  </Provider>
)

export default App
