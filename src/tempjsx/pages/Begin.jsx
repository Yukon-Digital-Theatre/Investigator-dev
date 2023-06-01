import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import styled  from "styled-components";

import { AppContext } from '../App';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: left;
justify-content: center;
  height:100vh;
`;

const NarratorContainer = styled.div`
padding:1vh;
font-family: 'Special Elite', cursive;
padding-top:1vh;
padding-bottom:1vh;
font-size: 4vw;
font-weight: 400;
line-height: 4vh;
letter-spacing: 0.2em;
text-align: left;
font-weight: 1000;
color: white;




`;

const Begin = () => {

    const {pageIntro, pageVoicePrefs, update, start, stop, list} = useContext(AppContext);


    
    
    const handler = useCallback((e) => {
        e.preventDefault();
        e.returnValue = '';
        return true;
      }, []);
      
      
      useEffect(() => {
      
        window.onbeforeunload = handler;
        
        return () => {
          window.onbeforeunload = handler;
        
        };
      });

      function helper(){
        setTimeout(() => {
          
        }, 500);
  
        pageIntro();
      }
  return (
    
    
    
    <Container>
        
            <NarratorContainer onClick={helper} className="Button outlineText">Begin</NarratorContainer>
            
      
               
            
      
        
    </Container>
 
  )
}

export default Begin