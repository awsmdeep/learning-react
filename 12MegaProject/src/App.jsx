import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth'; // Importing the authentication service
import { login, logout } from './store/authSlice'; // Importing login and logout actions from authSlice
import Header from './components/header/Header'; // Importing Header component
import Footer from './components/footer/Footer'; // Importing Footer component

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading status
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  useEffect(() => {
    // Effect to check current user status on component mount
    authService.currentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })); // Dispatch login action if user is logged in
        } else {
          dispatch(logout()); // Dispatch logout action if no user is logged in
        }
      })
      .finally(() => {
        setLoading(false); // Set loading to false once the user check is complete
      });
  }, [dispatch]); // Empty dependency array ensures this effect runs only once on mount

  return !loading ? (
    // Conditional rendering based on loading state
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      {/* Container div with full height and background color */}
      <div className='w-full block'>
        {/* Full width block containing Header, main content, and Footer */}
        <Header />
        {/* Placeholder for main content */}
        <main>
         TODO: {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null; // Render nothing if still loading
}

export default App; // Export the App component as default export
