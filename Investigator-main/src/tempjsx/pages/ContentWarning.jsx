import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import styled  from "styled-components";
import { useNavigate } from 'react-router-dom'

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
font-size: 1.25vw;
font-weight: 400;
line-height: 2.49740vh;
letter-spacing: 0.2em;
text-align: left;
font-weight: 1000;
color: black;



`


const ContentWarning = () => {
  const {pageSpecificContentWarning, narratorList, pagePrelude, soundMode} = useContext(AppContext);
  const [styles, setStyles] = useState({'animation':"fadeIn 1s"});
  const [stylesOne, setStylesOne] = useState({'opacity':"0"});
  const [stylesTwo, setStylesTwo] = useState({'opacity':"0"});
 
 
  const navigate = useNavigate();




  useEffect(() => {
  
   
    setTimeout(() => {
   
     
    }, 3000)
    setTimeout(() => {
     setStylesOne({'animation':"fadeIn 1s"})
    }, 4000)
    setTimeout(() => {
      setStylesTwo({'animation':"fadeIn 1s"})
     
    }, 5700)
   
    
  

 
    
  }, [navigate])

  function help1(){
    pageSpecificContentWarning();
  }
  
  function help2(){
    pagePrelude();
  }
   
    
    return (
        <Container>
            <NarratorContainer>
            
           GENERAL CONTENT WARNINGS:
          
           <NarratorContainer>
   The experience mentions directly and indirectly a fictional genocide which took place recently in conjunction with a war.
</NarratorContainer>
   
   <NarratorContainer>
Would you like to see more specific content warnings?
</NarratorContainer>
   
                <NarratorContainer className='Button' onClick ={help1}>
                 Yes
               </NarratorContainer>
               <NarratorContainer className='Button' onClick ={help2}>
                  No
               </NarratorContainer>
            </NarratorContainer>
        </Container>
      )
    }

export default ContentWarning