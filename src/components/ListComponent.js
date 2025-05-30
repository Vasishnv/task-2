import React, { useContext, useState,} from 'react'
import { tsklstcontext } from '../App'
import { Card, Container, Row, Col,Button, Form} from 'react-bootstrap';

const ListComponent = () => {
    const {tsklst,settsklst} = useContext(tsklstcontext);

    const [searchTerm,setSearchTerm] = useState("")
    
    const handledel = (i)=>{
        settsklst((prev)=>{
            const prevlst = [...prev];
            prevlst.splice(i,1);
            localStorage.setItem("Tasklst",JSON.stringify(prevlst));
            return prevlst;
        })
    }
    const filteredTasks = tsklst.filter((task) =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

    const handledelall = ()=>{
        settsklst([]);
        localStorage.setItem("Tasklst",JSON.stringify([]));
    }
  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <div className="bg-success text-white rounded-pill shadow p-4 my-4 px-5 fw-bold text-center fs-4 d-inline-block ">Tasks 📝 </div>
        
             <Form className="mb-3 w-50">
                 <Form.Control type="text" placeholder="Search tasks..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="text-center p-2"/>
            </Form>
            
        <div className='w-100'>
            <Container fluid>
            <Row>
                {filteredTasks.map((lstitem,i)=>(
                    <Col key={i} className='col-12 col-md-3'>
                        <Card className=' bg-light border-light m-3 p-2  shadow-sm'>
                            <Card.Title className='text-center'>Task #{i+1}</Card.Title>
                            <div style={{ width: "70%",height: "1px",background: "linear-gradient(to right, rgba(0,0,0,0), #333, rgba(0,0,0,0))",margin: "10px auto",opacity: "0.8"}}></div>
                            <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                                <Card.Text className='text-center' style={style}>{lstitem}</Card.Text>
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