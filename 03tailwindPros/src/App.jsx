// Importing the 'useState' hook from the 'react' library
import { useState } from 'react';

// Importing images for React and Vite logos
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Importing styles for the 'App' component
import './App.css';

// Importing the 'Card' component from './components/Card'
import Card from './components/Card';

// Defining the 'App' component as a function
function App() {
  
  // Declaring a state variable 'count' and its setter function 'setCount' using the 'useState' hook, initializing 'count' to 0
  const [count, setCount] = useState(0);

  // Creating an object 'newobj' with properties 'username' and 'email'
  let newobj = {
    username: 'deeepak',
    email: 'deepakdas538@gmail.com'
  };

  // Creating an array 'newarr' with some elements
  let newarr = [1, 3, 54, 5, 5, 5];

  // Returning JSX (HTML-like syntax) for rendering
  return (
    <>
      {/* Displaying a heading with text 'Hello world!' and applying CSS classes for styling */}
      <h1 className="bg-green-400 text-black p-10 rounded-xl mb-4">
        Hello world!
      </h1>
      
      {/* Rendering the 'Card' component with props */}
      <Card channel={newobj} username="deepak" p="jabfhabfhafhaefhaefa" btntext="click me" />

      {/* Rendering the 'Card' component with different props */}
      <Card newarr1={newarr} username="sam" p="safdjajnjfjkfbkjbfafbkfkbf" btntext="View Me" />
      <Card newarr1={newarr} username="ankit" p="safdjajnjfjkfbkjbfafbkfkbf" btntext="View Me" />
    </>
  );
}

// Exporting the 'App' component as the default export of this module
export default App;
