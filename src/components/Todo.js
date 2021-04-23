import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import './todoStyle.css';

function Todo() {

  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState({ status: false, id: null, completed: false });
  const [added, setAdded] = useState(false);
  const [removed, setRemoved] = useState(false);

  const alertStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <>
      {
        added && <div class="alert alert-success" role="alert" style={alertStyle}>
          Successfully added new Task to the ToDo List!
        </div>
      }
      {
        removed && <div class="alert alert-danger" role="alert" style={alertStyle}>
          Successfully removed task from the list!
        </div>
      }
      <h3>ToDo List</h3>
      <Form todos={todos} setTodos={setTodos} isEdit={isEdit} setIsEdit={setIsEdit} added={added} setAdded={setAdded}/>
      <TodoList todos={todos} setTodos={setTodos} isEdit={isEdit} setIsEdit={setIsEdit} removed={removed} setRemoved={setRemoved} />
    </>
  )
}

export default Todo
