import React from 'react' // Importing the React library to use React components and hooks.
import { useDispatch } from 'react-redux' // Importing the useDispatch hook from react-redux to dispatch actions.
import authService from '../../appwrite/auth' // Importing the authService for handling authentication-related services.
import { logout } from '../../store/authSlice' // Importing the logout action from the authSlice to handle user logout.

function LogoutBtn() { // Defining the LogoutBtn functional component.
    const dispatch = useDispatch() // Using the useDispatch hook to get the dispatch function from Redux.

    // Defining the logoutHandler function to handle the logout process.
    const logoutHandler = () => {
        // Calling the logout method from authService and then dispatching the logout action.
        authService.logout().then(() => {
            dispatch(logout()) // Dispatching the logout action to update the Redux state.
        })
    }

    // Returning a button element that triggers the logoutHandler function on click.
    return (
        <button 
            onClick={logoutHandler} // Setting the onClick event to trigger the logoutHandler function.
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' // Adding styling classes to the button.
        >
            Logout
        </button>
    )
}

export default LogoutBtn // Exporting the LogoutBtn component as the default export.
