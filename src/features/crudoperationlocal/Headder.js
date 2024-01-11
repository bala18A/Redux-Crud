import React from 'react'
import { useSelector } from 'react-redux'
import Addtask from './Addtask'

const Headder = () => { 
     const{tasksave}=useSelector(state=>state.task)
    return (
      <div>
          <h1 className="text-center my-3 text-primary">Project Management</h1>
         
          <p className='text-center lead'>{ `currently ${tasksave.length} task pending`}</p>
          <Addtask />
          
  
  </div>
    )
}

export default Headder