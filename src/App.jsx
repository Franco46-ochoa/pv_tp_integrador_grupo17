import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/Styles.css'
import Header from './Components/Header';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar/>
    </div>
  );
}

export default App
