// Importing the 'useState' hook from 'react'
import { useState } from 'react';

// Defining the App component as a function
function App() {
  // Declaring a state variable 'color' and its setter function 'setColor' using the 'useState' hook, initializing it to "olive"
  const [color, setColor] = useState("olive");

  // Returning JSX (HTML-like syntax) for rendering
  return (
    <div className='w-full h-screen duration-700' style={{ backgroundColor: color }}>
      {/* Container for the color buttons */}
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        {/* Container for individual color buttons */}
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-full '>
          {/* Button to set color to "red" */}
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: "red" }}>Red</button>
          {/* Button to set color to "green" */}
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: "green" }}>Green</button>
          {/* Button to set color to "blue" */}
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: "blue" }}>Blue</button>
          {/* Button to set color to "black" */}
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: "black" }}>Black</button>
          {/* Button to set color to "purple" */}
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: "purple" }}>Purple</button>
          {/* Button to set color to "yellow" */}
          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: "yellow" }}>Yellow</button>
          {/* Button to set color to "pink" */}
          <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: "pink" }}>Pink</button>
          {/* Button to set color to "cyan" */}
          <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{ backgroundColor: "cyan" }}>Cyan</button>
        </div>
      </div>
    </div>
  );
}

// Exporting the App component as the default export of this module
export default App;
