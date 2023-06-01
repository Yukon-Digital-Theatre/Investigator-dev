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
const Prelude = () => {
  const {pageBegin, pageMeetTheWeaver, pageIntroduction, narratorList, pagePrelude, soundMode} = useContext(AppContext);
 
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

  function help1(){

    pageMeetTheWeaver();
  }
  
  function help2(){

    pageBegin();
  }
   
    return (
      
        <Container>
            <NarratorContainer>
            You may change your delivery preference by clicking the gear icon at any time.

If you exit out of the browser midway through, you will not be able to return to the same place without starting the experience over again. 

If you selected an audio option at times you will see a pause button and a back button if you need it, although it is recommended you do not pause or go back.

You will be limited in how far back you can go.

If you selected text only you can only go forward in the experience by clicking the arrow when it appears.

Please ensure you are in a quiet, private, and comfortable place. Turn off notifications on any devices near you.

Are You Ready?
   
<NarratorContainer className="Button" onClick ={help1}>
                    Yes
               </NarratorContainer>
               <NarratorContainer className="Button" onClick ={help2}>
                    No, go back to the beginning
               </NarratorContainer>
            </NarratorContainer>
        </Container>
   
      )
}

export default Prelude