import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ handleLogin }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert('Enter your name');
    handleLogin(name.trim());
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-brown p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">🔐 Sign In</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
