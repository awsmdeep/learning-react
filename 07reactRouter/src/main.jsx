// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import CSS file for styling
import './index.css';

// Import necessary components and functions from react-router-dom
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Import components for different routes
import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import Github, { githubinfoloader } from './components/Github/Github';

// Create routes using createBrowserRouter and createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    // Define the layout route with nested routes for different pages
    <Route path='/' element={<Layout/>}>
      {/* Route for the home page */}
      <Route path='' element={<Home/>}/>
      {/* Route for the about page */}
      <Route path='about' element={<About/>}/>
      {/* Route for the contact page */}
      <Route path='contact' element={<Contact/>}/>
      {/* Route for displaying user details, with dynamic user ID */}
      <Route path='user/:userid' element={<User/>}/>
      {/* Route for the GitHub page, with a special loader function */}
      <Route 
        path='github'
        element={<Github/>}
        loader={githubinfoloader}
      />
    </Route>
  )
);

// Render the router inside a strict mode for performance benefits
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provide the router to the application */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
