import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode, logout }) => {
  return (
    <nav className={`p-4 flex justify-between items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black shadow'}`}>
      <Link to="/" className="text-xl font-bold">TO-DO APP 📝 🎯  </Link>
      <div className="space-x-3">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">Home</Link>
        <Link to="/add" className="px-4 py-2 bg-green-600 text-white rounded">Add Task</Link>
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-yellow-400 text-black rounded">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
        <button onClick={logout} className="px-4 py-2 bg-red-600 text-white rounded">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

