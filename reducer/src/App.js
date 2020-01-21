import React from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <Todo />
      <AddTodo />
    </div>
  );
}

export default App;
