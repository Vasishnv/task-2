import React, { useContext, useState } from 'react'
import {Button, Form} from "react-bootstrap"
import { tsklstcontext } from '../App';

const InputComponent = () => {

  
  const [tsk,settsk] = useState("");
  const {tsklst,settsklst} = useContext(tsklstcontext);
  const handlesubmit=(e) =>{
    e.preventDefault();
    if(!tsk || tsk.trim().length === 0){
      alert("Enter a valid Task !");
    }
    else{
      settsklst((prev)=>{
        const newlst = [...prev,tsk];
        localStorage.setItem("Tasklst",JSON.stringify(newlst));
        return newlst;
          });
      
      console.log(...tsklst,"input component")
      settsk("")
    }
  }

  

  return (
    <div className='mb-4 '>
      
        <Form onSubmit={(e)=>{handlesubmit(e)}} className='d-flex flex-column justify-content-center align-items-center '>
            <Form.Group className='mb-3'>
                <Form.Label>Enter task:</Form.Label>
                <Form.Control type='text' onChange={(e)=>{settsk(e.target.value)}} value={tsk}></Form.Control>
            </Form.Group>
            <Button variant='dark' type='submit'>Add Task To The List</Button>
           
        </Form>

    </div>
  )
}

export default InputComponent