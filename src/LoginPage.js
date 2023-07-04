import React, { useState } from 'react';
import AdminNavbar from "./layout/AdminNavbar";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = () => {
        // Perform any desired client-side validation
        // and handle the login logic here.
        console.log('Username:', username);
        console.log('Password:', password);

        // Assuming successful login, set loggedIn to true
        setLoggedIn(true);
    };
    return (
        <div>
            {loggedIn ? (
                <AdminNavbar/>
            ) : (
                <div>
                    <h1>Login Page</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default LoginPage;