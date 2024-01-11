
import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updatetask } from './createSlice'; 
import { useNavigate } from 'react-router';
const Updatetask = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.task.updatetask)
    const [title, settitle] = useState('')
    const [des, setdes] = useState('')
    const [id, setid] = useState(0)
    const navigate = useNavigate('/')
    useEffect(() => {
        if (data)
            settitle(data.title)
        setdes(data.des)
        setid(data.id)

    }, [data])
    const handleupdate = (e) => {
        e.preventDefault()
        dispatch(updatetask({ id, title, des }))
        settitle('')
        setdes('')
        navigate('/')
    }
  return (
    <div>
 <h2 className='text-center my-3 text-primary'>Update Task</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Enter Title" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control type="text" value={des} onChange={(e) => setdes(e.target.value)} placeholder="Enter Description " />
                    </Form.Group>

                    <Button onClick={handleupdate} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form >
    </div>
  )
}

export default Updatetask