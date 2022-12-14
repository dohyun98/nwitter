import React from 'react';
import { authService } from 'fbase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
      <div>
        <h1>HI</h1>
      </div>
    </>
  );
};

export default Profile;
