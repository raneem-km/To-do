import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddTask from './Components/AddTask';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [userId, setUserId] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, todo: 'Plan the day', completed: false },
    { id: 2, todo: 'Workout for 30 mins', completed: false },
    { id: 3, todo: 'Finish project report', completed: true },
    { id: 4, todo: 'Read 15 pages of a book', completed: false },
    { id: 5, todo: 'Play Football', completed: true },
  ]);

  useEffect(() => {
    document.body.style.background = darkMode ? '#121212' : '#f4f4f4';
    document.body.style.color = darkMode ? '#f1f1f1' : '#222';
    document.body.style.transition = 'all 0.4s';
  }, [darkMode]);

  const handleLogin = (name) => setUserId(name);
  const logout = () => {
    setUserId(null);
    setTodos([]);
  };

  return (
    <div>
      {!userId ? (
        <SignIn handleLogin={handleLogin} />
      ) : (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} logout={logout} />
          <Routes>
            <Route
              path="/"
              element={<Home userId={userId} todos={todos} setTodos={setTodos} darkMode={darkMode} />}
            />
            <Route
              path="/add"
              element={<AddTask setTodos={setTodos} darkMode={darkMode} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
