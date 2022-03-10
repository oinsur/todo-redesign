import React from 'react'

export default function FilterControl({filterStatus, setFilterStatus}) {
  // how do we keep track of the filterStatuese?
  const handleStatus = (status) => {
    
    setFilterStatus(status);
  }

  return (
    <div className = "item-statuses">
      <span onClick = {()=> handleStatus("all")}>All</span>
      <span onClick = {()=> handleStatus("active")}>Active</span>
      <span onClick = {()=> handleStatus("completed")}>Completed</span>
    </div>
  )
}