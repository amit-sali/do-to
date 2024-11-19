import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [todolist, setTodoList ] = useState([])

  let saveToDoList = (event)=>{
        
         let toname = event.target.toname.value;
   

         if(!todolist.includes(toname)){
         let finalDolist =[...todolist,toname]
         setTodoList(finalDolist);

                                      }
        else{
             alert("to do already exist");
         }
         event.preventDefault();

  }
  
  return (
    <>

    <div className="App">
    <h1>todo list</h1>
        <form onSubmit={saveToDoList}>
          <input type='text' name='toname' />
          <button>save</button>
          
        </form>


    </div>
   
    </>
  )
}

export default App
