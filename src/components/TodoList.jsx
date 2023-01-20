import React from 'react'
import Todo from "./Todo"

function TodoList({todos,setTodos,filteredTodos}) {
    return (
       <>
        <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
       </>
    )
}

export default TodoList;