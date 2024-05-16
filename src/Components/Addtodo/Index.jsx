import React, { useState } from 'react'
import './index.css'
import { useDispatch } from 'react-redux'
import {addtodo} from '../../Action-creators/Todo'
function Index() {
    const [todo,settodo]=useState();
    const dipatch=useDispatch();
    function handleclick(){
        dipatch(addtodo(todo));
        settodo('');
    }
  return (
    <div className='addtodo-sec'> 
        <input className='addtodo' placeholder='add a todo task....' value={todo} onChange={(e)=>settodo(e.target.value)}></input>
        <button className='add-todo-btn' onClick={()=>handleclick()} > +</button>
    </div>
  )
}

export default Index