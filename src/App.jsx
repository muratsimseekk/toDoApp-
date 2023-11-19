import { useState } from 'react'

import './App.css'

function App() {

  // Hold the value in task that comes from input 
  const [task,setTask] =useState('')
  const [taskList,setTaskList] = useState([])

  // // see in console 
  //  console.log(task);
  
  // To add input value as a Task to the page 

  function addHandler(){
    if (task == '') {
      alert('Task cannot be empty!')
    }
    else {
      // Create a object that includes id and value . Id is random 
      const item = {
        id: Math.floor(Math.random()*1000),
        value: task,
      }

      // update taskList 
      setTaskList(prevList => [...prevList,item]);
      setTask('');
    }
  }
  function deleteHandler(id) {
    //Filter unremoved list items
    setTaskList(taskList.filter(item => item.id !==id))
  }
  return (
    
      <div className='w-screen h-screen bg-slate-700 flex justify-center items-center'>
          <div className='bg-blue-300 w-1/3 h-min m-0 p-0 flex flex-col'>
              <div className='flex flex-col gap-3 items-center'>
                <h1 >To Do APP </h1>
                <input type="text" placeholder='Create a new Task' value={task} onChange={(e)=> setTask(e.target.value)} />
                <button  className='bg-slate-700 p-1 border border-solid  w-1/4' onClick={addHandler} >ADD</button>
                </div>
              <div>
                  <ul className='flex flex-col gap-3 my-3 items-center'>
                    {taskList.map(listItem => {
                      return (
                        <div key={listItem.id} className='flex justify-between w-2/3 border items-baseline ' >
                          <li >{listItem.value}</li>
                          <button onClick={() => deleteHandler(listItem.id)} className='p-1 border-2 border-gray-800 rounded-md hover:bg-slate-700 hover:text-white' >Remove</button>
                        </div>
                      )
                    })}
                  </ul>
              </div>

          </div>
      </div>
  
  )
}

export default App
