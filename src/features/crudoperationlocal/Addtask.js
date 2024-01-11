import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { addtask } from './createSlice'
import ViewTask from './ViewTask';
const Addtask = () => {
 
    const dispatch = useDispatch()
    const handlesubmit = (e) => {
        e.preventDefault()
        if (title && des) 
        {       
            dispatch(addtask({ title, des }))
            console.log({title,des});
            settitle('')
            setdes('')
        }
    }
    const [title, settitle] = useState('')
    const [des, setdes] = useState('')
    return (
        <div>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Task Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Enter Title" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control type="text" value={des} onChange={(e) => setdes(e.target.value)} placeholder="Enter Description " />
                </Form.Group>

                <Button onClick={handlesubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form >
            <ViewTask />
            </div>
  )
}

export default Addtask