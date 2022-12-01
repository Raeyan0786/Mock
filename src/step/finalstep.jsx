import React from 'react'
import '../step/form.css'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
const Finalstep = () => {
  return (
    <>
    <section  >
        <Container>
            <Row>
                <Col lg='3' className='form__pos' style={{ width:'22rem'}}>
                    <div>
                        <span className='font'><i class="ri-checkbox-circle-fill"></i></span>
                        <h3 className='text-center fw-bold ' style={{marginTop:"100px"}}>Congratulations, Raeyan</h3>
                    </div>
                    <button className='btn__crt' >Create Workspace</button>
                    
                </Col>
            </Row>
        </Container>
        
    </section>
        
    </>
  )
}

export default Finalstep