import React, { useState } from 'react';
import { authService } from '../../services/api';
import { Button, Input } from '../../components';
import { Main } from './styles'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('marcelo.monteiro@cifraclub.com');
  const [password, setPassword] = useState('123456');

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