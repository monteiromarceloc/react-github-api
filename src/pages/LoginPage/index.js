import React, { useCallback, useEffect, useState } from 'react';
import { apiService } from '../../services/api';
import { Button, Input } from '../../components';
import { Main } from './styles'

function HomePage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {

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