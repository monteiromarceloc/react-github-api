import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  LoginPage,
  HomePage,
} from './pages'

function App() {
  const isAuthenticated = useSelector(state => state.MainReducer.isAuthenticated) // TODO: try to use firebase.auth
  return (
    <Switch>
      <Route exact path='/'>
        {
          isAuthenticated
            ? <Redirect to={{ pathname: '/home' }} />
            : <Redirect to={{ pathname: '/login' }} />
        }
      </Route>
      <Route exact path='/home'>
        {
          isAuthenticated
            ? <HomePage />
            : <Redirect to={{ pathname: '/login' }} />
        }
      </Route>
      <Route exact path='/login'><LoginPage /></Route>
    </Switch>
  )
}

export default App
