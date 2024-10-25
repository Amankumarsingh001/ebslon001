import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const location = useLocation();
  const formData = location.state?.formData || {
    email: '',
    password: ''
  };
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate('/thankyou');
  };

  return (
    <>
      {!showForgotPassword ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Login</h2>

            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                readOnly
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                readOnly
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Login
              </button>
            </form>

            <p className="mt-4 text-center">
              <button
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password?
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <h1 className="text-4xl text-white">Task Completed</h1>
        </div>
      )}
    </>
  );
}

export default Login;
