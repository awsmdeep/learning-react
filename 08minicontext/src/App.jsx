import React from 'react';
import './App.css'
import UserContextProvider from './context/userContextProvider'; // Assuming the correct casing and path

import Login from './components/Login'; // Importing Login component
import Profile from './components/Profile'; // Importing Profile component

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
