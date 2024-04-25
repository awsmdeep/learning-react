import React, { useState, useContext } from 'react'; // Importing React and useState, useContext hooks
import UserContext from '../context/userContext'; // Assuming the correct casing and path for the context

function Login() { // Capitalized the function name to follow convention
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext); // Fixed casing of useContext and userContext

    const handleSubmit = (e) => {
        e.preventDefault(); // Fixed preventDefault() method name
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input className='text-center' type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            {'             '}
            <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login; // Capitalized the export name to match the component name
