import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password
    };
    try {
      if (confirmPassword === password){
      const res = await fetch('http://localhost:5467/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
      });
      navigate('/login')
    }
    else{
      alert("please confirm password")
    }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container mx-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitLogin}>
            <h2 className="text-3xl text-center font-semibold mb-6">Sign Up</h2>

            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirm_password" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
