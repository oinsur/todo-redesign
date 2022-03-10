import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'

export default function TaskList({tasks, setTasks, filterStatus, setFilterStatus, filteredTasks, setFilteredTasks}) {
  return (
    <div className="task-list-wrapper">
      <div className="task-list">
        {/* map through an array of todos and for every todo, create a task component */}
        {filteredTasks.map((task) => {
          return <Task
            text = {task.text}
            key = {task.id}
            status = {task.status}
            tasks = {tasks}
            setTasks = {setTasks}
            task = {task}
            setFilteredTasks = {setFilteredTasks}
            />

        })}
      </div>
      

      <div className="task-items-info">
        <div className="items-left">
          5 items left
        </div>
        {/* FilterControl component */}
        <FilterControl
          filterStatus = {filterStatus}
          setFilterStatus = {setFilterStatus} 
        />

        <div className="items-clear">
          <span>Clear Compelted</span>
        </div>
      </div>
    </div>
  )
}