import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const filterHandler = () => {
    switch (status) {
      case "done":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "waiting":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="h-screen w-screen flex bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-500">
      <div className="container bg-white rounded-xl mx-auto my-auto w-1/4 h-5/6 flex flex-col shadow-xl overflow-y-auto ">
        <h2 className="text-4xl font-semibold	text-center flex mx-auto mt-4 mb-4 text-blue-400 header-font">
          Bucket List
        </h2>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
        />
        <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
      </div>
    </div>
  );
}

export default App;
