import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleLogin = (event) => {
      event.preventDefault();
  
      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Login failed');
          }
          return res.json();
        })
        .then((json) => {
          console.log(json); // You can handle the response here
          // Show success alert upon successful login
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You have been logged in!',
          });
          // Optionally, you can redirect the user or perform other actions upon successful login
        })
        .catch((error) => {
          setError('Login failed. Please check your credentials.');
          console.error('Error:', error);
        });
    };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                  <label htmlFor="text" className="mb-1">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="mb-1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
