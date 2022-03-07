import React from 'react'

export default function TaskInput() {
  return (
    <div className="task-input">
      <div className="check">
        <div className="check-mark">
        {/* insert image here */}
        </div>
      </div>
      <div className="new-todo-input">
        <form action="">
          <input id="todo-input" type="text" placeholder='Create a new todo' />
        </form>
      </div>
    </div>
  )
}

