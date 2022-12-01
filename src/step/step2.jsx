import React from 'react'
import '../step/form.css'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
const step2 = ({handleNext}) => {
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
                            <h4 className='text-center fw-bold'>Let's set up a home for all...</h4>
                            <h6 className="mb-4 fw-bolt text-center" style={{color:'#CACECE'}}>You can always create another workspace later.</h6>
                        </div>
                    <Form onSubmit={handleSubmit}  className='form' style={{marginTop:60}}>
                        <FormGroup className="form__group">
                            <p>Workspace Name</p>
                            <input classname='bdr' type='text' placeholder="Example"/>
                        
                        </FormGroup>
                        <br/>
                        <FormGroup className="form__group">
                        <p>Workspace Name</p>
                        <div className='input1'>
                            <label>www.eden.com/</label>
                            <input classname='bdr' type='email' placeholder="Example"/>
                            
                        </div>
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

export default step2