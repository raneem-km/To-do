

import React, { useState } from 'react';

const Home = ({ userId, todos, setTodos, darkMode }) => {
  const [search, setSearch] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const total = todos.length;
  const done = todos.filter(t => t.completed).length;
  const pending = total - done;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const filtered = todos.filter(t => t.todo.toLowerCase().includes(search.toLowerCase()));

  const toggleComplete = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => setTodos(todos.filter(t => t.id !== id));

  const saveEdit = () => {
    setTodos(todos.map(t => t.id === editId ? { ...t, todo: editText } : t));
    setEditId(null);
    setEditText('');
  };

  return (
    <div>
      <div className="p-8 sm:p-12 text-gray-900 dark:text-gray-100 transition-all duration-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 flex items-center gap-3">
          <span role="img" aria-label="wave">👋</span>
          <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Hey {userId}, welcome to To-Do App!
          </span>
        </h1>
        <p className="italic mb-10 text-lg sm:text-xl text-blue-600 dark:text-gray-300">
          Your productivity journey starts here. Let's finish those tasks! 🚀
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200">📋 Total Tasks</h2>
            <p className="text-3xl font-bold">{total}</p>
          </div>

          <div className="bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-green-800 dark:text-green-200">✅ Completed</h2>
            <p className="text-3xl font-bold">{done}</p>
          </div>

          <div className="bg-yellow-100 dark:bg-yellow-800 border border-yellow-300 dark:border-yellow-700 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100">⏳ Pending</h2>
            <p className="text-3xl font-bold">{pending}</p>
          </div>

          <div className="bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">📈 Progress</h2>
            <p className="text-3xl font-bold mb-3">{pct}%</p>
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full">
              <div
                className="h-3 bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-6 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-black dark:text-white"
      />

      {editId && (
        <div className="mb-6 bg-yellow-50 dark:bg-yellow-800 p-4 rounded">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">✏️ Edit Task</h3>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white mb-4"
          />
          <div className="space-x-2">
            <button onClick={saveEdit} className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
            <button onClick={() => setEditId(null)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </div>
      )}

      {filtered.map((task) => (
        <div key={task.id} className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded shadow mb-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="w-5 h-5"
            />
            <span
              className={`${
                task.completed
                  ? 'line-through text-gray-400 dark:text-gray-500'
                  : 'text-gray-900 dark:text-gray-100'
              }`}
            >
              {task.todo}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditId(task.id);
                setEditText(task.todo);
              }}
              className="text-yellow-600 dark:text-yellow-400"
            >
              ✏️
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-600 dark:text-red-400"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
