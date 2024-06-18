import React, { useState } from 'react'; // Import React and the useState hook
import authService from '../appwrite/auth'; // Import authService for authentication
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom for navigation
import { login } from '../store/authSlice'; // Import the login action from authSlice
import Button from './Button'; // Import the Button component
import Input from './Input'; // Import the Input component
import Logo from './Logo'; // Import the Logo component
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux for dispatching actions
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form for form handling

// Define a functional component named Signup
function Signup() {
    const navigate = useNavigate(); // Initialize the navigate function for navigation
    const [error, setError] = useState(""); // Initialize the error state with an empty string
    const dispatch = useDispatch(); // Initialize the dispatch function for dispatching actions
    const { register, handleSubmit } = useForm(); // Destructure register and handleSubmit from useForm

    // Define the create function to handle form submission
    const create = async (data) => {
        setError(""); // Reset the error state
        try {
            const userData = await authService.createAccount(data); // Attempt to create a new account using authService
            if (userData) {
                const userData = await authService.currentUser(); // Fetch the current user data
                if (userData) dispatch(login(userData)); // Dispatch the login action with user data
                navigate("/"); // Navigate to the home page
            }
        } catch (error) {
            setError(error.message); // Set the error state with the error message
        }
    };

    return (
        // Return the JSX for the signup form
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" /> {/* Display the Logo component */}
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In {/* Link to the login page */}
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>} {/* Display error message if exists */}
                <form onSubmit={handleSubmit(create)}> {/* Handle form submission */}
                    <div className="space-y-5">
                        <Input
                            label="Full Name: "
                            type="text"
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true
                            })}
                        />
                        <Button type="submit" className="w-full">Create Account</Button> {/* Submit button */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup; // Export the Signup component as the default export
