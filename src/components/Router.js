import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from './Navigation';
/**
import { Auth } from 'routes/Auth';
import { Home } from 'routes/Home';
import { Profile } from 'routes/Profile';
*/
const AppRouter = ({ isLoggedIn, userObj }) => {
  if (!isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <Navigation userObj={userObj} />
      <Routes>
        <Route path='/' element={<Home userObj={userObj} />} />
        <Route path='/profile' element={<Profile userObj={userObj} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
