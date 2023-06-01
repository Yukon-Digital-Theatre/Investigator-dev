import React, { useState, useEffect, useContext } from 'react'
import styled  from "styled-components";
import { AppContext } from '../App';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
justify-content: center;
  height:100vh;
`;

const TextContainer = styled.div`
background-color:green;
padding:1%;
`;

const Button = styled.div`
background-color:green;
padding:1%;
width:fit-content;
white-space: nowrap;
&:hover{
cursor: pointer;
background-color: white;
}
&:active{
  background-color: orange;
}
`;

const Background = () => {
  const {pageWeaver} = useContext(AppContext);

  
    
  
    return (
        <Container>
            <TextContainer>
           
            SPECIFIC CONTENT WARNINGS:
	Allusions and discussion of the hair of murder victims being used in the carpets the weaver is weaving. Brief references to mass killings, war, sexual assault, enslaved children, relocation, deportation, starvation, assaults.
If you want to continue with this experience, click Next (Go back to page 2)
If you do not want to continue with this experience close your browser (or close this document).

   
<Button onClick = {pageWeaver}>
                 Continue
               </Button>
            </TextContainer>
        </Container>
      )
}

export default Background