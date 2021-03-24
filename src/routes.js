import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import {
  LoginPage,
  HomePage,
} from './pages'

function App() {
  const isAuthenticated = useSelector(state => state.MainReducer.isAuthenticated) // TODO: session should expire

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {
            isAuthenticated
              ? <Redirect to='/home' />
              : <Redirect to='/login' />
          }
        </Route>
        <Route exact path='/home'>
          {
            isAuthenticated
              ? <HomePage />
              : <Redirect to='/login' />
          }
        </Route>
        <Route exact path='/login'><LoginPage /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
