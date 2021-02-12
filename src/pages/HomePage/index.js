import React, { useEffect } from 'react';
import { apiService } from '../../services/api';
import './style.css'

function HomePage() {

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    console.log('here')
    const res = await apiService.getRepos()
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          User repositóries
        </p>
      </header>
    </div>
  );
}

export default HomePage;
