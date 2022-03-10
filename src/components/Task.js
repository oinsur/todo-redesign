import React from 'react'
import { useState } from 'react'
import Check from '../images/icon-check.svg'

export default function Task({text, task, tasks, setTasks}) {

  // create a state variable to keep track of mutable tasks
  const [mutableTask, setMutableTask] = useState(task);

  const checked = mutableTask.status ? "checked" : "";
  const checkIcon = mutableTask.status ? (<img src={Check} alt="done"/>) : "";
  

  const markCompleted = () => {
    console.log(tasks)
    // when the task is clicked, CSS should be marked
    // task status should be switched
    // pull in the task in this function
    // get access to the stats and switch the boolean
    // update the mutableTask with the new status
    // set the status of the task to the opposite boolean
    // this will update the status on the Frontend
    setMutableTask({...mutableTask, status: !mutableTask.status});
    // update tasks to the new array of objects and their new statuses!
    // this will update the status in the Backend
    const updatedTasks = tasks.map((item) => {
      // find the corresponding task from the map
      return task.id === item.id ? {...item, status : !item.status} : item //ternary operator
    })
    setTasks(updatedTasks)

  }
  // create a variable to make the CSS of the cross-icon active
  // const makeActive = (e) => {
    // e.target.style.background = "#5a61af";
  // }
  // const makeInactive = (e) => {
    // e.target.style.background = "none";
  // }
  const removeItem = ()=> {
    console.log(task)
    // filter thru tasks & create new array, filter out un clicked tasks
    const newTasks = tasks.filter((item) => item !== task)
    // console.log(newTasks)
    setTasks(newTasks);
  }
  const click = "click";
  return (
    <div className={`task-item ${click}`}>
      
      <div className="task-text-container">
        <div className="check" onClick={markCompleted}>
          <div className={`check-mark ${checked}`} >
            {checkIcon}
          </div>
        </div>

        <div className = {`task-text ${checked}`}>
          <p>{text}</p>
        </div>
      </div>
      <div className="remove-item " onClick={removeItem }>
        <img src="./images/icon-cross.svg" alt="cross icon"></img>
      </div>
    </div>
  )
}