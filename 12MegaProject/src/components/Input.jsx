import React, { useId } from 'react' // Import React and the useId hook from the React library

// Define a functional component named Input using React.forwardRef
const Input = React.forwardRef(function Input({
    label, // Destructure 'label' prop
    type = "text", // Destructure 'type' prop with a default value of 'text'
    className = "", // Destructure 'className' prop with a default value of an empty string
    ...props // Collect any additional props into a variable called 'props'
}, ref) {
    const id = useId() // Generate a unique ID using the useId hook
    return (
        // Return a div that wraps the label and input elements
        <div className='w-full'>
            {label && ( // If 'label' prop is provided, render a label element
                <label className='inline-block mb-1 pl-1' 
                htmlFor={id}>
                    {label} // Display the label text
                </label>
            )}
            <input type={type} className={`px-3 py-2 rounded-lg bg-white
                 text-black outline-none focus:bg-gray-50 duration-200 border
                  border-gray-200 w-full ${className}`} 
                  ref={ref} {...props} id={id} // Apply the ref, additional props, and unique ID to the input element
            />
        </div>
    )
})

export default Input // Export the Input component as the default export
