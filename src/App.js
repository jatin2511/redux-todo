import React from 'react'
import Todo from './Components/Todo/Index'
import Addtodo from './Components/Addtodo/Index'
import './App.css'
import { Provider } from 'react-redux'
import store from './Store/Index'
function App() {
  return (
    <Provider store={store}> <div className='todo'>
     <Addtodo />
     <Todo />
    </div></Provider>
   
  )
}

export default App