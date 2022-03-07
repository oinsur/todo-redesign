import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'

export default function TaskList() {
  return (
    <div className="task-list-wrapper">
      <div className="task-list">
        {/* map through an array of todos and for every todo, create a task component */}
        <Task />
      </div>

      <div className="task-items-info">
        <div className="items-left">
          5 items left
        </div>
        {/* FilterControl component */}
        <FilterControl />

        <div className="items-clear">
          <span>Clear Compelted</span>
        </div>
      </div>
    </div>
  )
}
