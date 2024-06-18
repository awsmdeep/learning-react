import React, { useEffect, useState } from 'react'  // Import React and necessary hooks from the React library
import { useSelector } from 'react-redux'  // Import the useSelector hook from react-redux to access the Redux store
import { useNavigate } from 'react-router-dom'  // Import the useNavigate hook from react-router-dom for navigation

// Define a functional component named Protected that takes in children and an optional authentication prop
export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate()  // Initialize the useNavigate hook to get the navigate function
  const [loader, setLoader] = useState(true)  // Initialize state for loader with a default value of true
  const authStatus = useSelector(state => state.auth.status)  // Access the auth status from the Redux store

  useEffect(() => {
    // Check if the component requires authentication and if the auth status does not match the required authentication state
    if (authentication && authStatus != authentication) {
      navigate("/login")  // If authentication is required and the user is not authenticated, navigate to the login page
    } else if (!authentication && authStatus != authentication) {
      navigate("/")  // If authentication is not required and the user is authenticated, navigate to the home page
    }
    setLoader(false)  // Set the loader state to false to indicate loading is complete

  }, [authStatus, navigate, authentication])  // Dependencies for the useEffect hook to re-run when authStatus, navigate, or authentication changes

  // Return a loading message if loader is true, otherwise render the children components
  return loader ? <h1>Loading....</h1> : <>{children} </>
}
