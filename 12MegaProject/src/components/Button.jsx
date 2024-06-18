import React from 'react' // Import the React library

// Define a functional component named Button
function Button({
    children, // Destructure 'children' prop, which will be the content inside the button
    type='button', // Destructure 'type' prop with a default value of 'button'
    bgColor='bg-blue-500', // Destructure 'bgColor' prop with a default value of 'bg-blue-500'
    textColor='', // Destructure 'textColor' prop with a default value of an empty string
    className='', // Destructure 'className' prop with a default value of an empty string
    ...props // Collect any additional props into a variable called 'props'
}) {
  return (
    // Return a button element with a dynamic className and spread the remaining props
    <button className={`px-4 py-2 rounded-lg ${className } ${bgColor} ${textColor}`} {...props}>
        {children} // Render the children inside the button
    </button>   
  )
}

export default Button // Export the Button component as the default export
