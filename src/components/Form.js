import React, { useState, useRef } from 'react'
import './formStyle.css';

function Form({ todos, setTodos, isEdit, setIsEdit, added, setAdded }) {

  const [input, setInput] = useState('')
  const [editInput, setEditInput] = useState('')
  const inputRef = useRef(null);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px"
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(input === '' || input.length > 66) return;
    const newList = [{ 
      id: Math.floor(Math.random() * 100000),
      text: input,
      completed: false
    }, ...todos];
    setTodos(newList);
    setInput('');
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 5000);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    if(editInput === '' || editInput.length > 66) return;
    const newValue = {
      id: isEdit.id,
      text: editInput,
      completed: isEdit.completed
    };
    setTodos(prev => prev.map(item => (item.id === isEdit.id ? newValue : item)));
    setIsEdit({ status: false, id: null })
    setEditInput('');
  }

  const changeHandler = (e) => {
    setInput(e.target.value);
  }
  const changeEditHandler = (e) => {
    setEditInput(e.target.value);
  }

  return (
    <>
      <div style={style}>
        <form class="row g-3">
          {isEdit.status ? (
            <>
              <div class="col-sm-15">
                <label for="updateTask" class="visually-hidden">New Task Text</label>
                <input type="text" value={editInput} class="form-control" id="updateTask" placeholder="New Task Text" onChange={changeEditHandler}/>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto pt-3 mb-4">
                <button class="btn btn-primary" type="button" onClick={handleUpdate}>Update Task</button>
              </div>
            </>
          ) : (
            <>
              <div class="col-sm-15">
                <label for="addTask" class="visually-hidden">Task Text</label>
                <input type="text" ref={inputRef} value={input} class="form-control" id="addTask" placeholder="Task Text" onChange={changeHandler}/>
              </div>
              <div class="d-grid gap-2 col-6 mx-auto pt-3 mb-4">
                <button class="btn btn-primary" type="button" onClick={submitHandler}>Add Task</button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  )
}

export default Form
