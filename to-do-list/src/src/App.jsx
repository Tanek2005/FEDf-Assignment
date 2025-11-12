import React, { useState } from 'react';

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);
  
  // State to hold the value of the input field
  const [inputValue, setInputValue] = useState('');

  // Function to add a new todo
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      // Add new todo to the list
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      // Clear the input field
      setInputValue('');
    }
  };

  // Function to remove a todo
  const handleRemoveTodo = (id) => {
    // Filter out the todo with the given id
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Naya task add karein..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;