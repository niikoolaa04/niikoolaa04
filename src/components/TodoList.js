import React from 'react'
import './style.css'

function TodoList({ todos, setTodos, isEdit, setIsEdit, removed, setRemoved }) {

  const handleDelete = id => {
    const filtered = [...todos].filter(t => t.id !== id);
    setTodos(filtered);
    if(id === isEdit.id) {
      setIsEdit({ status: false, id: null })
    }
    setRemoved(true);
    setTimeout(() => {
      setRemoved(false);
    }, 5000);
  }

  const completedStyle = {
    backgroundImage: "linear-gradient(to right, #77b2ff 100%, #076aff 100%)"
  }

  const notCompletedStyle = {
    backgroundImage: "linear-gradient(to right, #ff7676 100%, #ff2424 100%)"
  }

  const handleEdit = (todo) => {
    if(isEdit.status === false) {
      setIsEdit({ 
        status: true,
        id: todo.id,
        completed: todo.completed
      });
    } else if(isEdit.status === true) {
      setIsEdit({ 
        status: false,
        id: null,
        completed: null
      });
    }
  }

  const handleToggle = (todo) => {
    const newValue = {
      id: todo.id,
      text: todo.text,
      completed: !todo.completed
    };
    setTodos(prev => prev.map(item => (item.id === todo.id ? newValue : item)));
  }

  return todos.map((todo, index) => (
    <div className="main" key={index} style={todo.completed ? completedStyle : notCompletedStyle}>
      <div className="todo-task" key={todo.id}>
        {todo.text}
      </div>
      <div className="icons">
        <i class="fas fa-times" onClick={() => handleDelete(todo.id)} title="Delete Task"/>
        <i class="fas fa-edit" onClick={() => handleEdit(todo)} title="Edit Task"></i>
        <i class="fas fa-toggle-on" onClick={() => handleToggle(todo)} title="Mark Task as Completed/Not Completed"></i>
      </div>
    </div>
  ))
}

export default TodoList
