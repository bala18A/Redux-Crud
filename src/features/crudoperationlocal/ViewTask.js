import React from 'react'
import { deletetask,setselectedTask } from './createSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const ViewTask = () => {
    const data = useSelector((state => state.task.tasksave))
    console.log(data);//indha task vandhu store la irukara key not in slice name
    const dispatch = useDispatch()

    const handledelete = (item) => {

        dispatch(deletetask(item))
        console.log("deletevandha value",item);
    }
    const updatetask = (item) => {
        console.log('update task');
       
        dispatch(setselectedTask(item))
    }
    
  return (
    <div>
            <br />

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th style={{ textAlign: "center" }} colSpan={2}>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item) =>

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.des}</td>
                            <td> <Link to='/update'><Button onClick={() => updatetask(item)}>Update</Button> </Link></td>
                            <td><Button onClick={() => handledelete(item)}>Delete</Button></td>

                        </tr>

                    )}
                </tbody>
            </Table>

        </div>
  )
}

export default ViewTask