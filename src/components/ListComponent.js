import React, { useContext,} from 'react'
import { tsklstcontext } from '../App'
import { Card, Container, Row, Col,Button,} from 'react-bootstrap';

const ListComponent = () => {
    const {tsklst,settsklst} = useContext(tsklstcontext);


    
    const handledel = (i)=>{
        settsklst((prev)=>{
            const prevlst = [...prev];
            prevlst.splice(i,1);
            localStorage.setItem("Tasklst",JSON.stringify(prevlst));
            return prevlst;
        })
    }
    const handlecheckbox =(key)=>{
        const newlst = tsklst.map((tasks,i)=>{
            return(
                key === i ? {...tasks,completed:!tasks.completed}:tasks
            )
        })
        settsklst(newlst);
    }
    

    const handledelall = ()=>{
        settsklst([]);
        localStorage.setItem("Tasklst",JSON.stringify([]));
    }
  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <div className="bg-success text-white rounded-pill shadow p-4 my-4 px-5 fw-bold text-center fs-4 d-inline-block ">Tasks 📝 </div>
        
             
           
            
        <div className='w-100'>
            <Container fluid>
            <Row>
                {tsklst.map((lstitem,i)=>(
                    <Col key={i} className='col-12 col-md-3'>
                        <Card className={lstitem.completed?"bg-success border-0 bg-opacity-25  m-3 p-2 shadow-sm":"bg-light border-0  m-3 p-2"}>
                            <Card.Title className='text-center '>Task #{i+1} {lstitem.completed ? <div className='badge bg-success ms-3'>completed</div >:<div className=' ms-3 badge bg-warning'>not completed</div>}</Card.Title>
                            <div style={{ width: "70%",height: "1px",background: "linear-gradient(to right, rgba(0,0,0,0), #333, rgba(0,0,0,0))",margin: "10px auto",opacity: "0.8"}}></div>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                                <Card.Text className='text-center' style={style}>{lstitem.tsk}</Card.Text>
                                <div style={{ transform: "scale(1.5)"}}>
                                    <input type='checkbox' className='form-check-input my-3' checked={lstitem.completed} onChange={()=> handlecheckbox(i)}></input>
                                </div>
                                <Button variant='danger' onClick={()=>handledel(i)}>Delete 🗑️</Button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
       


        </div>
         {tsklst.length > 0 ? <Button variant="primary" onClick={handledelall}>Delete All</Button> : null}
        
    </div>
  )
}

const style={
color: "#003366",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  maxWidth: "100%",
  whiteSpace: "normal"
}
export default ListComponent