import React, { useId } from 'react' // Import React and the useId hook from the React library

// Define a functional component named Select
function Select({
    option, // Destructure 'option' prop
    label, // Destructure 'label' prop
    className = "", // Destructure 'className' prop with a default value of an empty string
    ...props // Collect any additional props into a variable called 'props'
}, ref) {
    const id = useId() // Generate a unique ID using the useId hook
    return (
        // Return a div that wraps the label and select elements
        <div className='w-full'>
            {label && ( // If 'label' prop is provided, render a label element
                <label htmlFor={id} className=''>
                    {label} // Display the label text
                </label>
            )}
            <select
                {...props} // Spread the additional props onto the select element
                id={id} // Apply the unique ID to the select element
                ref={ref} // Apply the ref to the select element
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none
                    focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} // Apply dynamic classes to the select element
            >
                {option?.map((option) => ( // Map over the 'option' array and render an option element for each item
                    <option key={option} value={option}> // Use the index as the key and the option as the value
                        {option} // Display the option text
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select) // Export the Select component wrapped in React.forwardRef
