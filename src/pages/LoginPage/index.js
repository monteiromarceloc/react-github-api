import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { authService } from '../../services/api';
import { Button, Input } from '../../components';
import { Main } from './styles'

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    const onSucess = () => history.push('/home');
    const onFailure = () => { }
    await authService.signIn(email, password, dispatch, toast, onSucess, onFailure);
  }

  return (
    <Main>
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        placeholder='Senha'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button onClick={onLogin}>Login</Button>
    </Main>
  );
}

export default HomePage;