import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasksave:[],
    updatetask:{}

}
export const taskcreateSlice=createSlice({
    name:"addtask",
    initialState,
 reducers:
 {
    addtask(state,action)
    {
       
        const id=state.tasksave.length?state.tasksave[state.tasksave.length-1].id+1:1
        const task={...action.payload,id}
        state.tasksave.push(task)
    },
    deletetask(state,action)
    {
      
        state.tasksave=state.tasksave.filter(task=>task.id!==action.payload.id)
    },
    updatetask(state,action)
    {
                state.tasksave=state.tasksave.map(task=>task.id===action.payload.id?action.payload:task)
    },
   setselectedTask(state,action)
    {
        state.updatetask=action.payload
    }
 }

   
})
export default taskcreateSlice.reducer
export const {addtask,updatetask,setselectedTask,deletetask} = taskcreateSlice.actions