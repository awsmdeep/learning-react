import React, { useState } from 'react' // Import React and the useState hook
import { Link, useNavigate } from 'react-router-dom' // Import Link and useNavigate from react-router-dom for navigation
import { login as authlogin } from '../store/authSlice' // Import the login action from authSlice
import Button from './Button' // Import the Button component
import Logo from './Logo' // Import the Logo component
import Input from './Input' // Import the Input component
import { useDispatch } from 'react-redux' // Import useDispatch from react-redux for dispatching actions
import authService from '../appwrite/auth' // Import the authService for authentication
import useForm from 'react-hook-form' // Import useForm from react-hook-form for form handling

// Define a functional component named Login
function Login() {
    const navigate = useNavigate() // Initialize the navigate function for navigation
    const dispatch = useDispatch() // Initialize the dispatch function for dispatching actions
    const { register, handleSubmit } = useForm() // Destructure register and handleSubmit from useForm
    const [error, setError] = useState("") // Initialize the error state with an empty string

    // Define the login function to handle form submission
    const login = async (data) => {
        setError("") // Reset the error state
        try {
            const session = await authService.login(data) // Attempt to login using authService
            if (session) {
                const userData = await authService.currentUser() // Fetch the current user data
                if (userData) dispatch(authlogin(userData)) // Dispatch the authlogin action with user data
                navigate("/") // Navigate to the home page
            }
        } catch (error) {
            setError(error.message) // Set the error state with the error message
        }
    }

    return (
        // Return the JSX for the login form
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" /> {/* Display the Logo component */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up {/* Link to the signup page */}
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>} {/* Display error message if exists */}
                <form onSubmit={handleSubmit(login)} className='mt-8'> {/* Handle form submission */}
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => 
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            placeholder="Enter your password"
                            type="password"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <Button
                            type='submit' className='w-full'
                        >Sign in</Button> {/* Submit button */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login // Export the Login component as the default export
