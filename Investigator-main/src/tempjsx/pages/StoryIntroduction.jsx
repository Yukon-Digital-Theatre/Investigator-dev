
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

const StoryIntroduction = () => {
  /*
  const {pageBackground, pageWeaver, list, pageContentWarning, pagePrelude, narratorList, soundMode} = useContext(AppContext);
  const [styles, setStyles] = useState({'animation':"fadeIn 1s"});
  const [stylesOne, setStylesOne] = useState({'opacity':"0"});
  const [stylesTwo, setStylesTwo] = useState({'opacity':"0"});
  const [stylesThree, setStylesThree] = useState({'opacity':"0"});
  const [stylesFour, setStylesFour] = useState({'opacity':"0"});
  const [stylesFive, setStylesFive] = useState({'opacity':"0"});
  const [stylesSix, setStylesSix] = useState({'opacity':"0"});
 
   const navigate = useNavigate();
   var audio=null;
   const background = list.find((item, index)=>{
    console.log(index);
    return(index == 1);
  })
if (soundMode){
   audio = narratorList.find((item, index)=>{
    console.log(index);
    return(index == 1);
  })
}


    useEffect(() => {
      if (soundMode){
      audio.play()
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
    

   
      
    }, [navigate])

  function backgroundHelper(){
    setStylesFour({'animation':"fadeOut 3s"})
    setTimeout(() => {
      setStylesFour({'opacity':"0"})
      pageBackground();
     }, 2900)
    
  }

  function weaverHelper(){
    setStylesFour({'animation':"fadeOut 3s"})
    background.fade(1,0,3000);
    setTimeout(() => {

      setStylesFour({'opacity':"0"})
      pageWeaver();
     }, 2900)
    
  }
*/
    return (
      
        <Container>
       
            <Container>
            This is a world out of time and place. It is similar to our own.
	However, this country, in this world, is recovering from a war stretching over several years.
	The war ended only six weeks ago.


    Would you like to read more about the history of this world before continuing?


   
                <Container>
                    Yes
               </Container>
               <Container>
                  No
               </Container>
            </Container>
          
        </Container>
      )
}

export default StoryIntroduction