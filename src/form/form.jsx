import React,{useState} from 'react'
//import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import '../form/step.css'
import Box from '@mui/material/Box';
import Step1 from '../step/step'
import Step2 from '../step/step2'
import Step3 from '../step/step3'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Finalstep from '../step/finalstep'
//import Button from '@mui/material/Button';
//import Typography from '@mui/material/Typography';
const Form = () => {
    const [currentstep,setCurrentStep]=useState(0);
    const handleNext=()=>{
        //currentstep=currentstep+1;
        let cstep=currentstep;
        cstep=cstep+1;
        setCurrentStep( cstep);
    }
    const steps=["","","",""];

    const getStepContent = (step) => {
        switch (step) {
          case 0:
            return (
              <Step1
                handleNext={handleNext}
              />
            );
          case 1:
            return (
              <Step2
                handleNext={handleNext}
                
              />
            );
          case 2:
            return (
                <Step3
                handleNext={handleNext}
                
              />
            );
          case 3:
            return <Finalstep  />;
          default:
            return (
              <Step
                handleNext={handleNext}
              />
            );
        }
      };
  return (
    <>
    <section style={{background:'red',height:'30%'}}>
        <Box sx={{ width: '25%'  }} className='mt-4 step__pos'>
            <Stepper activeStep={currentstep} iconContainerStyle={{width: 36}} alternativeLabel>
                {steps.map((item,i) => (
                <Step key={i}>
                    <StepLabel >{item}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>
    </section>
    {getStepContent(currentstep)}
    </>
  )
}

export default Form