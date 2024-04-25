import React, { useState } from "react"; // Importing React and useState from the 'react' library

import userContext from "./userContext"; // Importing the userContext object from the specified path

// Defining a functional component named userContextProvider that takes 'children' as a prop
const UserContextProvider = ({ children }) => {
    // Using the useState hook to create state for 'user' and 'setUser', initializing 'user' to null
    const [user, setUser] = useState(null);

    // Returning the JSX that provides the user context using the Provider component
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};

export default UserContextProvider; // Exporting the UserContextProvider component as the default export
 