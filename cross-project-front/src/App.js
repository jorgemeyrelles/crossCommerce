import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Numbers from './pages/Random';
import SelectedNum from './pages/Selected';
// import { getData } from './services/api';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element= { <Home /> } />
      <Route exact path="/random/:id" element={ <Numbers /> } />
      <Route exact path="/selected/:id" element={ <SelectedNum /> } />
    </Routes>
  );
}

export default App;
