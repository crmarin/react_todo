import React, { useEffect, useState } from 'react';
import Form from '@/components/Form';
import TodoList from '@/components/TodoList';

import { userStore } from '@/store/userStore';

function App() {
  const logout = userStore((state) => state.logout);

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  const filterHandler = () => {
    switch (status) {
      case 'done':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'waiting':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const onLogoutClick = () => {
    logout();
  };

  return (
    <div className="h-screen w-screen flex bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-500">
      <div className="container bg-white rounded-xl mx-auto my-auto w-1/4 h-5/6 flex flex-col shadow-xl overflow-y-auto ">
        <div className="flex my-5">
          <h2 className="text-4xl font-semibold	text-center flex mx-auto mt-4 mb-4 text-gray-400 header-font">
            Todo List
          </h2>
          <button
            onClick={() => onLogoutClick()}
            className=" my-2 mx-2 p-4 rounded-lg bg-red-500 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-indigo-600"
          >
            <i className="fas fa-sign-out-alt text-white"></i>
          </button>
        </div>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App;
