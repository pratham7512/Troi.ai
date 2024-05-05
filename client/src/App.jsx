import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './Pages/Login';
import Success from './Pages/Success';
import LandingPage from './Pages/Home';
import Chat from './Pages/Chat';

const App = () => {
 
 return (
  <div>
    <header>
    <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<LandingPage />}/>
          <Route path='/success'element={<Success/>}/>
          <Route path="/chat/:id" element={<Chat />} />
        </Routes>
    </Router>
    </header>

  </div>

    
 );
};

export default App;
