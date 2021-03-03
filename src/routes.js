import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import {
  LoginPage,
  HomePage,
} from './pages'

function App() {
  const isAuthenticated = useSelector(state => state.MainReducer.isAuthenticated)
  return (
    <Switch>
      <Route exact path='/'><LoginPage /></Route>
      {
        isAuthenticated && (
          <Route exact path='/home'><HomePage /></Route>
        )
      }
    </Switch>
  )
}

export default App
