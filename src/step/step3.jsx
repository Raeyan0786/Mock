import React from 'react'
import '../step/form.css'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { lineHeight } from '@mui/system'
const step3 = ({handleNext}) => {
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
                    <div style={{marginTop:10}}className="text__size">
                        <h4 className='text-center fw-bold'>How are you Planning to use...</h4>
                        <h6 className="mb-4 fw-bolt text-center" style={{color:'#CACECE'}}>We'll streamline your setup experience.</h6>
                    </div>

                    <div className='d-flex' style={{marginTop:60,marginBottom:30}}>
                        <div className='div1'>
                            <span><i class="ri-user-fill"></i></span>
                            <h6>MySelf</h6>
                            <p style={{color: '#CACECE',lineHeight:1.2}}>Write Better. Think more clearly.Stay organized.</p>
                        </div>
                        <div className='div2'>
                            <span><i class="ri-team-fill"></i></span>
                            <h6>With my team</h6>
                            <p style={{color: '#CACECE', lineHeight:1.2}}>Wikis,docs,task & projects,all in one place.</p>
                        </div>
                    </div>

                    <button className='btn__crt' onClick={handleNext}>Create Workspace</button>
                    
                
                </Col>
            </Row>
        </Container>
    </section>
</>
  )
}

export default step3