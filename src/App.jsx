import './App.css';
import React from 'react';
import Login from './Components/login';
import { Route,Routes } from 'react-router-dom';
import Forgot from './Components/forgot';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
   
    </div>
  );
}

export default App;
