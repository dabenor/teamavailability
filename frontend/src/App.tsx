import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Perform login API request here
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful!', data);
        // Redirect to the status page or handle login success here
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">
        <h1>Welcome to MyWorkStatus</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="My Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="My Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
