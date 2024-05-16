import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo } from '../../Action-creators/Todo';
import './index.css'

function Index() {
    const dispatch=useDispatch();
    const todos=useSelector(store=>store.todos)
    function handleDeleteTodo(index){
      dispatch(deletetodo(index));
    }
  return (
    <div id='todo-list'> 
    {todos.map((todo, index) => (
      <div className='todo-item' key={index}>
        <span>{todo}</span>
        <span 
          className='cross-btn'
          onClick={() => handleDeleteTodo(index)}>❌</span>
      </div>
    ))}
  </div>
  )
}

export default Index