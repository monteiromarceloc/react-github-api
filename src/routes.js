import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import firebase from './services/firebaseCredentials';

import {
  LoginPage,
  HomePage,
} from './pages'
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuthenticated } from './store/MainReducer';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.MainReducer.isAuthenticated) // TODO: try to use firebase.auth

  useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged(
      user => {
        dispatch(setIsAuthenticated(!!user))
      },
    );
    return () => {
      unlisten();
    }
  })

  // const isAuthenticated = useSelector(state => state.MainReducer.isAuthenticated) // TODO: try to use firebase.auth
  return (
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
  )
}

export default App
