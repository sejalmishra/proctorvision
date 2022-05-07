import React from 'react';
import Spash from './Spash';
import Login from './Login';
import Home from './Home';
import Settings from './Settings';
import { Route, Routes } from 'react-router-dom';
import Onboard from './Onboard';
import Check from './Check';
import Exam from './Exam';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Spash/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/onboard' element={<Onboard/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/check' element={<Check/>}/>
        <Route path='/exam' element={<Exam/>}/>
      </Routes>
  );
}

export default App;
