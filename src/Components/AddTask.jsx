// Components/AddTask.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ setTodos, darkMode }) => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('Pending');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!text.trim()) return alert('Task is empty');
    const newTask = {
      id: Date.now(),
      todo: text,
      completed: status === 'Completed'
    };
    setTodos(prev => [newTask, ...prev]);
    navigate('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">➕ Add New Task</h2>
      <textarea
        placeholder="Task description..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        rows={3}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border rounded mb-4">
        <option className='text-black' value="Pending">Pending</option>
        <option className='text-black' value="Completed">Completed</option>
      </select>
      <button onClick={handleSubmit} className="w-full bg-blue-600 text-white p-2 rounded">
        Save Task
      </button>
    </div>
  );
};

export default AddTask;
