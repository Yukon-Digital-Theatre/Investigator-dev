import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import styled  from "styled-components";
import { backgroundAudio } from '../../data/backgroundAudioData';

import { AppContext } from '../App';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
justify-content: center;
  height:100vh;
  animation-name:fade-in;
animation-duration:3s;
font-family: 'Special Elite', cursive;
`;

const TextContainer = styled.div`
background-color:transparent;
padding:1%;
font-size: 150px;
animation-name:fade-in;
animation-duration:3s;
font-family: 'Special Elite', cursive;





`;


const Intro = () => {



 
 const background = backgroundAudio[0].audio;
  
  const [styles, setStyles] = useState({'animation':"fadeIn 3s"});






    useEffect(() => {
      if(!background.playing()){
        background.play()
      }
      
      background.loop(true);
      background.fade(0,1,1000);
      setTimeout(() => {

       
      }, 3000)
      setTimeout(() => {
       setStyles({'animation':"fadeOut 3s"})
      }, 4000)
      setTimeout(() => {
      }, 7000)

    

   
      
    }, [])
    
    

  return (
    
    

    <Container>
        <TextContainer className="outlineText">
            The Investigator
            
        </TextContainer>
        
    </Container>

  )
}

export default Intro