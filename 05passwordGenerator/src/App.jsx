// Importing necessary hooks and assets from React
import { useState, useCallback, useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg' // Importing React logo image
import viteLogo from '/vite.svg' // Importing Vite logo image
import './App.css' // Importing styles for the App component

// Define the main function component named App
function App() {
  // Define state variables using the useState hook
  const [length, setLength] = useState(8) // State for password length
  const [numberAllow, setNumberAllowed] = useState(8) // State for allowing numbers in password
  const [charAllow, setCharAllowed] = useState(8) // State for allowing special characters in password
  const [password, setPassword] = useState("") // State for generated password

  // Create a reference to the input element for copying password to clipboard
  const passwordReff=useRef(null)

  // Define a function to copy the generated password to clipboard
  const copyPasswordToClipboard=useCallback(()=>{
    passwordReff.current?.select() // Select the password text
    window.navigator.clipboard.writeText(password) // Copy the selected text to clipboard
  },[password])

  // Define a function to generate a password
  const passwordGenerator = useCallback(() => {
    let pass = "" // Initialize an empty string for the password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // Define a string of uppercase and lowercase letters
    if (numberAllow) str += "0123456789" // Add numbers to the string if allowed
    if (charAllow) str += "!@#$%^&*()~" // Add special characters to the string if allowed

    // Generate the password based on the specified length and character set
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) // Generate a random index within the string length
      pass += str.charAt(char) // Append the character at the random index to the password
    }
    setPassword(pass) // Set the generated password in the state

  }, [length, numberAllow, charAllow, setPassword])

  // Use useEffect hook to generate password when length or character settings change
  useEffect(() => {
    passwordGenerator() // Call the password generation function
  }, [length, numberAllow, charAllow, passwordGenerator])

  // Return the JSX content for the App component
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordReff}

        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={0}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}

          />
          <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllow}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>

    </div>
  )
}

// Export the App component as the default export
export default App
