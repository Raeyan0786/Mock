import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import '../step/form.css'
function step({handleNext}) {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted")
    }
  return (
    <>
        <section>
            <Container>
                <Row>
                    <Col lg='3' md='6'  className='form__pos' >
                        <div style={{marginTop:30}}className="text__size">
                            <h3 className='text-center fw-bold'>Welcome! First thing first</h3>
                            <h6 className="mb-4 fw-bolt text-center" style={{color:'#CACECE'}}>Billing Information</h6>
                        </div>
                    <Form onSubmit={handleSubmit}  className='form' style={{marginTop:60}}>
                        <FormGroup className="form__group">
                            <p>Full Name</p>
                            <input type='text' placeholder="Enter your name"/>
                        
                        </FormGroup>
                        <br/>
                        <FormGroup className="form__group">
                        <p>Display Name</p>
                        <input type='email' placeholder="Enter your email"/>
                        </FormGroup>

                        <button className='btn__crt' onClick={handleNext}>Create Workspace</button>
                        
                    </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default step