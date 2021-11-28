import React from 'react'

const Todo = ({text}) => {
  return (
    <div>
      <li>{text}</li>
      <button>Check</button>
      <button>Delete</button>
    </div>
  )
}

export default Todo;