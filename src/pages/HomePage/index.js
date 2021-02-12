import React, { useEffect } from 'react';
import { apiService } from '../../services/api';
import './style.css'

function HomePage() {

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    console.log('here')
    const res = await apiService.getProjects()
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>User Projects</p>

      </header>
    </div>
  );
}

export default HomePage;
