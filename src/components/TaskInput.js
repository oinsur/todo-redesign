import React from 'react'
import {useState} from 'react'

// How do we add neww Todo item to the list?
// Take whatever is type in
// How do we keep track of what we typed in the input?
// and push it to the list

export default function TaskInput({tasks, setTasks}) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleForm = (e) => {
    e.preventDefault();

  const generateId = (array) => {
    // this variable should hold an array for all the ids
    const IDs = array.map((item) => item.id)
    // find the largest index in array, then add 1
    return Math.max(...IDs) + 1;
  }
    if(input){

      const newTask = {
        id: generateId(tasks),
        text: input,
        status: false
      }
      // run the generateId function
      generateId(tasks);
      setTasks([newTask,...tasks])
      setInput("")
    }
    // create a new todo object
  }
  return (
    <div className="task-input">
      <div className="check">
        <div className="check-mark">
        </div>
      </div>
      <div className="new-todo-input">
        <form onSubmit={handleForm}>
          <input value={input} onChange  = {handleChange} id="todo-input" type="text" placeholder='Create a new todo' />
        </form>
      </div>
    </div>
  )
}