import { configureStore } from "@reduxjs/toolkit";
import createtaskreducer from '../features/crudoperationlocal/createSlice'
export const store=configureStore({
    reducer:{
        task:createtaskreducer,
        

    }
})