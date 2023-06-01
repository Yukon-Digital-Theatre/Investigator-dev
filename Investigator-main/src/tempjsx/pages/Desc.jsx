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
const Desc = () => {


  const {pageContentWarning, pagePrelude, narratorList, soundMode} = useContext(AppContext);
  const [styles, setStyles] = useState({'animation':"fadeIn 1s"});
  const [stylesOne, setStylesOne] = useState({'opacity':"0"});
  const [stylesTwo, setStylesTwo] = useState({'opacity':"0"});
  const [stylesThree, setStylesThree] = useState({'opacity':"0"});
  const [stylesFour, setStylesFour] = useState({'opacity':"0"});
  const [stylesFive, setStylesFive] = useState({'opacity':"0"});
  const [stylesSix, setStylesSix] = useState({'opacity':"0"});
 
   const navigate = useNavigate();
 



    useEffect(() => {
      if (soundMode){

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
      }, 7500)
      setTimeout(() => {
      
        setStylesFour({'animation':"fadeIn 1s"})
      }, 7500)
      setTimeout(() => {
      
        setStylesFive({'animation':"fadeIn 1s"})
      }, 7500)
      setTimeout(() => {
      
        setStylesSix({'animation':"fadeIn 1s"})
      }, 7500)
    

   
      
    }, [])

  
function help1(){
  pageContentWarning();
}

function help2(){
  pagePrelude();
}
 
 
    
  
  return (
    
    <Container>
        <NarratorContainer>
<NarratorContainer style={styles}>
Welcome to The Investigator, an interactive digital storytelling experience. 

This story is set out of time and place, in a world similar to our own, but not ours. 

You will be taking on the role of an investigator who has been sent to question a weaver. 

This experience will take about 40 to 60 minutes, depending on the choices you make. 

It is recommended you find a private, quiet, and comfortable place to get the most from this experience.

You may turn the ambiance soundtrack off or on via the sound button at any time.

Before you continue, would you like general content warnings?
</NarratorContainer >

            <NarratorContainer className="Button" onClick={help1}>
                Yes
            </NarratorContainer>
            <NarratorContainer className="Button" onClick={help2}>
                No
            </NarratorContainer>
        </NarratorContainer>
        
    </Container>
    
  )
}

export default Desc