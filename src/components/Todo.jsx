import React from "react";

function Todo({ setTodos ,text, todo ,todos}) {
  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return{
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  };
  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id))
  }
  return (
    <div className="flex w-full h-auto my-1.5 p-4 bg-gray-200 justify-between px-4 font-sans ">
      <li
        className={`todo-item ${
          todo.completed ? "line-through" : ""
        } text-gray-400 text-2xl`}
      >
        {text}
      </li>
      <div className="icons flex mx-2 text-xl">
        <button onClick={completeHandler} className="text-green-500 mx-6">
          <i className="fas fa-check"></i>
        </button>
        <button className="text-red-500">
          <i onClick={deleteHandler} className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Todo;
