import React, { useState, useEffect } from 'react';

// Server
import axios from 'axios';

// CSS
import './App.css';

// Global Variables
import { API_IP } from './assets/GlobalVariables';

const App = () => {

  // States
  const [data, setData] = useState(null)

  // UseEffects

  useEffect(() => {
    
    const getData = async () => {
      try {
        const res = await axios.get(API_IP);
        console.log(res.data);
        setData(res.data.data);
      }
      catch (e) {
        console.error(e);
      }
    }

    getData();
  }, [])

  return (
    <div className="App">
      <h1>My site</h1>
      
      <label>attempt number: </label>
      
      <label>{data}</label> 
    </div>
  );
}

export default App;
