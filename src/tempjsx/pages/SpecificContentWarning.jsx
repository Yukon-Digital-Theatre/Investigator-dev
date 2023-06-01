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

const SpecificContentWarning = () => {
  const {pageSpecificContentWarning, narratorList, pagePrelude, soundMode} = useContext(AppContext);



  const [styles, setStyles] = useState({'animation':"fadeIn 1s"});
  const [stylesOne, setStylesOne] = useState({'opacity':"0"});
  const [stylesTwo, setStylesTwo] = useState({'opacity':"0"});
  const [stylesThree, setStylesThree] = useState({'opacity':"0"});
  const [stylesFour, setStylesFour] = useState({'opacity':"0"});
  const [stylesFive, setStylesFive] = useState({'opacity':"0"});
  const [stylesSix, setStylesSix] = useState({'opacity':"1"});
 
 
  const navigate = useNavigate();




  useEffect(() => {
    if(soundMode){

    }
   
    setTimeout(() => {
   
     
    }, 3000)
    setTimeout(() => {
     setStylesOne({'animation':"fadeIn 1s"})
    }, 4000)
    setTimeout(() => {
      setStylesTwo({'animation':"fadeIn 1s"})
     
    }, 5700)
    setTimeout(() => {
      setStylesThree({'animation':"fadeIn 1s"})
     
    }, 5700)
    setTimeout(() => {
      setStylesFour({'animation':"fadeIn 1s"})
     
    }, 5700)
    setTimeout(() => {
      setStylesFive({'animation':"fadeIn 1s"})
     
    }, 5700)
  }, [navigate])
 



 
  function help2(){

    pagePrelude();
  }
   
    return (
        
        <Container>
            <NarratorContainer style={stylesSix}>
           
            SPECIFIC CONTENT WARNINGS:
            <NarratorContainer>Allusions and discussion of the hair of murder victims being used in the carpets the weaver is weaving. 
          Brief references to mass killings, war, sexual assault, enslaved children, relocation, deportation, starvation, assaults.</NarratorContainer>
            <NarratorContainer style={stylesThree}>If you want to continue with this experience, click Next </NarratorContainer>
            <NarratorContainer style={stylesFour}>If you do not want to continue with this experience close your browser </NarratorContainer>

   
<NarratorContainer className="Button" onClick ={help2}>
                   Next
               </NarratorContainer>
            </NarratorContainer>
        </Container>
       
      )
}

export default SpecificContentWarning