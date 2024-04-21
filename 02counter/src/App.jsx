// Importing the 'useState' hook from the 'react' library
import { useState } from 'react';

// Importing images for React and Vite logos
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Importing styles for the 'App' component
import './App.css';

// Defining the 'App' component as a function
function App() {

  // Declaring a state variable 'counter' using the 'useState' hook, initializing it to 0
  let [counter, setCounter] = useState(0);

  // Function to increment the 'counter' state by 1
  const addValue = () => {
    counter = counter + 1; // Incrementing the 'counter' variable directly (won't re-render)
    if (counter <= 20) {
      // Checking if 'counter' is less than or equal to 20
      // Updating the 'counter' state using the 'setCounter' function, ensuring it doesn't exceed 20
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  // Function to decrement the 'counter' state by 1
  const removeValue = () => {
    if (counter > 0) // Checking if 'counter' is greater than 0
      // Updating the 'counter' state by decrementing it
      setCounter(prevCounter => prevCounter - 1);
  };

  // Returning the JSX (HTML-like syntax) for rendering
  return (
    <>
      <h1>First</h1> {/* Displaying a heading with the text 'First' */}
      <h2>Counter Value : {counter}</h2> {/* Displaying the current value of 'counter' */}

      {/* Button to increment the 'counter' value when clicked, triggering the 'addValue' function */}
      <button onClick={addValue}>Add Value</button>

      <br />

      {/* Button to decrement the 'counter' value when clicked, triggering the 'removeValue' function */}
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

// Exporting the 'App' component as the default export of this module
export default App;
