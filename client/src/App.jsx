import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './Pages/Login';
import Success from './Pages/Success';
import LandingPage from './Pages/Home';

const App = () => {
 
 return (
  <div>
    <header>
    <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/success'element={<Success/>}/>
        </Routes>
    </Router>
    </header>

  </div>

    
 );
};

export default App;
