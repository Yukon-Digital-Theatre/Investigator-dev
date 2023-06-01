import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import styled  from "styled-components";
import { useNavigate } from 'react-router-dom'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
justify-content: center;
  height:100vh;
`;

const TextContainer = styled.div`
background-color:transparent;
padding:1%;
`;

const Button = styled.div`
background-color:transparent;
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




const CharacterPreferences = () => {

   
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
    audioNarratorInitial();
    audioOnly();
    pageVoicePrefs();
  }
  function textOnlyHelper(){
    textOnly();
    pageDesc();
  }
  function bothHelper(){
    audioNarratorInitial();
    bothAudioText();
    pageVoicePrefs();
  }


function def(){

}
  
  

  
    
  return (

    
    
    <Container styles={stylesFour}>
      
        <TextContainer style={styles}>
            
        What features would you like for the characters for this experience?    

    </TextContainer>
        <Button style={stylesOne} onClick={buttonClickable ? audioOnlyHelper: def}>
        Audio Only 
        </Button >
        <Button style={stylesTwo} onClick={buttonClickableOne ? textOnlyHelper: def}>
        Text only
        </Button>
        <Button style={stylesThree} onClick={buttonClickableTwo ? bothHelper: def}>
        Both audio and text
        </Button>
    </Container>

  )
}

export default CharacterPreferences