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
                    <Col key={i} className='col-12 col-md-6 col-lg-4 col-xl-3 '>
                        <Card style={{}} className={lstitem.completed?"bg-light border-0   m-3 pt-2 shadow":"bg-light border-0  m-3  pt-2 shadow"}>
                            <Card.Title className='text-center d-flex justify-content-between align-items-center ps-3 pe-4'>
                                <div className='rounded-pill badge bg-primary'>#{i+1}</div>
                                    <div className='d-flex justify-content-between align-items-center gap-2'>{lstitem.completed ? <div className='badge bg-success ms-3 rounded-pill'>completed</div >:<div className='rounded-pill ms-3 badge bg-secondary ' style={{}}>not completed</div>}
                                            <div style={{ transform: "scale(1.3)"}}>
                                            <input type='checkbox' className='form-check-input my-3' checked={lstitem.completed} onChange={()=> handlecheckbox(i)}></input>
                                        </div>
                                
                                </div>
                            </Card.Title>
                            
                            <div style={{ width: "70%",height: "1px",background: "linear-gradient(to right, rgba(0,0,0,0), #333, rgba(0,0,0,0))",margin: " auto",opacity: "0.8"}}></div>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                                <Card.Text className='text-center fs-3 fw-semibold' style={style}>{lstitem.tsk}</Card.Text>
                                <div className='d-flex '>
                                   
                                <Button style={{transform:"scale(.9)"}} variant='dark' onClick={()=>handledel(i)}>🗑️</Button>
                                </div>
                                
                            </Card.Body>
                            <div className={lstitem.completed ?'w-100 bg-success':"w-100 bg-warning rounded"} style={{height:"3px",opacity:"0.5"}}></div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
       


        </div >
         {tsklst.length > 0 ? <Button variant="dark" className='mt-5' onClick={handledelall}>Delete All</Button> : null}
        
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
