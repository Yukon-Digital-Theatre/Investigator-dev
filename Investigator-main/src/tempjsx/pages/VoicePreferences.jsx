
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

const VoicePreferences = () => {
    const {audioFemale, audioMale, audioNonBinary, pageDesc} = useContext(AppContext);
    const [styles, setStyles] = useState({'animation':"fadeIn 1s"});
    const [stylesOne, setStylesOne] = useState({'opacity':"0"});
    const [stylesTwo, setStylesTwo] = useState({'opacity':"0"});
    const [stylesThree, setStylesThree] = useState({'opacity':"0"});
    const [stylesFour, setStylesFour] = useState({'opacity':"1"});
    const [buttonClickable, setButtonClickable] = useState(false);
    const [buttonClickableOne, setButtonClickableOne] = useState(false);
    const [buttonClickableTwo, setButtonClickableTwo] = useState(false);
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
    
    function femaleHelper(){
      audioFemale();
      pageDesc(); 
    }
    function maleHelper(){
      audioMale();
      pageDesc();    }
    function nonBinaryHelper(){
      audioNonBinary();
      pageDesc();
        }

    return (


    
        
        <Container>
            <NarratorContainer>
            Would you like your character’s voice to be:
            </NarratorContainer>
            <NarratorContainer className="Button" onClick={femaleHelper}>
     Female
            </NarratorContainer >
            <NarratorContainer className="Button" onClick={maleHelper}>
            Male
            </NarratorContainer>
            <NarratorContainer className="Button" onClick={nonBinaryHelper}>
            Non-binary
            </NarratorContainer >
        </Container>

      )
}

export default VoicePreferences