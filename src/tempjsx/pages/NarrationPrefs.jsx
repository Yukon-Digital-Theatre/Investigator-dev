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





`;






const NarrationPrefs = () => {

   
    const {audioOnly, textOnly, bothAudioText, pageDesc,pageStory, pageWeaver,pageVoicePrefs,audioNarratorInitial} = useContext(AppContext);

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
      setTimeout(() => {
      
        setStylesThree({'animation':"fadeIn 1s"})
        setButtonClickable(true);
        setButtonClickableOne(true);
        setButtonClickableTwo(true);
      }, 7500)
    

   
      
    }, [navigate])
    
  function audioOnlyHelper(){

    audioOnly();
    pageVoicePrefs();
  }
  function textOnlyHelper(){
    textOnly();
    pageDesc();
  }
  function bothHelper(){
   
    bothAudioText();
    pageVoicePrefs();
  }


function def(){

}
  
  

  
    
  return (

    
    
    <Container styles={stylesFour}>
      
        <NarratorContainer style={styles}>
            
        To begin the experience, please select your preference for the narration:

    </NarratorContainer>
        <NarratorContainer className = "Button" style={stylesOne} onClick={buttonClickable ? audioOnlyHelper: def}>
        Audio Only 
        </NarratorContainer >
        <NarratorContainer className = "Button" style={stylesTwo} onClick={buttonClickableOne ? textOnlyHelper: def}>
        Text only
        </NarratorContainer>
        <NarratorContainer className = "Button" style={stylesThree} onClick={buttonClickableTwo ? bothHelper: def}>
        Both audio and text
        </NarratorContainer>
    </Container>

  )
}

export default NarrationPrefs