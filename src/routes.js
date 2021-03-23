import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import {
  LoginPage,
  HomePage,
} from './pages'

function App() {
  // const isAuthenticated = useSelector(state => state.MainReducer.isAuthenticated) // TODO: session should expire

  return (
    <Switch>
      <Route exact path='/'><Redirect to='/login' /></Route>
      <Route path='/home'><HomePage /></Route>
      <Route path='/login'><LoginPage /></Route>
    </Switch>
  )
}

export default App
