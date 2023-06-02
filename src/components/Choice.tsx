import React from 'react'
import { css, styled } from 'styled-components';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';
import { backgroundAudio } from '../data/backgroundAudioData';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';
import { textItem } from '../types';
import { choiceTextData } from '../data/textData';





const NarratorContainer = styled.div`
padding:1vh;
font-family: 'Special Elite', cursive;
padding-bottom:2vh;
font-size: 1.3vw;
font-weight: 400;
line-height: 2.49740vh;
letter-spacing: 0.2em;
text-align: left;
background-color:transparent;
animation-name: fade-in;
animation-fill-mode:forwards;
animation-duration:1s;

`;

const ButtonContainer = styled.div`
padding:5vh;
font-family: 'Special Elite', cursive;
padding-bottom:4vh;

font-size: 1.3vw;
font-weight: 400;
line-height: 2.49740vh;
letter-spacing: 0.2em;
text-align: left;
background-color:transparent;
animation-name: fade-in;
animation-fill-mode:forwards;
animation-duration:1s;

`;




interface props {
  id:number;
 }




const Choice = ({id}:props) => {


const choiceData=choiceTextData;

  const dispatch = useDispatch();





  function redirect(question: string){
    if(question==="Go along with it, you might learn more "){
      backgroundAudio[1].audio.fade(1,0,3000);
      dispatch(updateHalo(3));
      setTimeout(() => {
      dispatch(updatePage("GoingWithTheFlow"))
      backgroundAudio[2].audio.play();
      backgroundAudio[2].audio.fade(0,1,2000);
      }, 1000);
      setTimeout(() => {
        backgroundAudio[1].audio.pause();
      }, 3000);
    }else if(question==="Clarify why you are really here, you don’t have all day "){
      backgroundAudio[1].audio.fade(1,0,3000);
      dispatch(updateHalo(3));
      setTimeout(() => {
      dispatch(updatePage("DownToBusiness"))
      backgroundAudio[1].audio.pause();
      backgroundAudio[2].audio.play();
      backgroundAudio[2].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[1].audio.pause();
    }, 3000);
    }else if(question==="The weaver keeps weaving. You know it’s time to be more honest."){
      setTimeout(() => {
      dispatch(updatePage("DownToBusiness"))
    }, 1000);
    }else if(question==="Yes, you don’t want the weaver to shut down. Keep asking simple questions."){
      backgroundAudio[2].audio.fade(1,0,3000);
      dispatch(updateHalo(4));
      setTimeout(() => {
      dispatch(updatePage("KeepGoing"))
      backgroundAudio[2].audio.pause();
      backgroundAudio[3].audio.play();
      backgroundAudio[3].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[2].audio.pause();
    }, 3000);
    }else if(question==="No, it’s time to ask harder questions, you’ll risk the weaver shutting down."){
      backgroundAudio[2].audio.fade(1,0,3000);
      dispatch(updateHalo(4));
      setTimeout(() => {
      dispatch(updatePage("NewTactic"))
      backgroundAudio[2].audio.pause();
      backgroundAudio[3].audio.play();
      backgroundAudio[3].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[2].audio.pause();
    }, 3000);
    }else if(question==="Continue"&&id===23){
      setTimeout(() => {
      dispatch(updatePage("NewTactic"))
    }, 1000);
    }else if(question==="No, the weaver must have known, you’ll need to apply more pressure to get the truth, to get a confession."){
      backgroundAudio[3].audio.fade(1,0,3000);
      dispatch(updateHalo(5));
      setTimeout(() => {
      dispatch(updatePage("MorePressure"))
      backgroundAudio[3].audio.pause();
      backgroundAudio[4].audio.play();
      backgroundAudio[4].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[3].audio.pause();
    }, 3000);
    }else if(question==="Yes, you believe the weaver really doesn’t know and you’ll have to break it down to make the weaver realize so that more questions can be answered"){
      backgroundAudio[3].audio.fade(1,0,3000);
      dispatch(updateHalo(5));
      setTimeout(() => {
      dispatch(updatePage("BreakItDown"))
      backgroundAudio[3].audio.pause();
      backgroundAudio[4].audio.play();
      backgroundAudio[4].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[3].audio.pause();
    }, 3000);
    }else if(question==="Continue"&&id===25){
      setTimeout(() => {
      dispatch(updatePage("BreakItDown"))
    }, 1000);
    }else if(question==="Yes, it might be important "){
      backgroundAudio[4].audio.fade(1,0,3000);
      dispatch(updateHalo(6));
      setTimeout(() => {
      dispatch(updatePage("TheEmail"))
      backgroundAudio[4].audio.pause();
      backgroundAudio[5].audio.play();
      backgroundAudio[5].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[4].audio.pause();
    }, 3000);
    }else if(question==="No, if it was that important it would be a phone call "){
      backgroundAudio[4].audio.fade(1,0,3000);
      dispatch(updateHalo(6));
      setTimeout(() => {
      dispatch(updatePage("Admission"))
      backgroundAudio[4].audio.pause();
      backgroundAudio[5].audio.play();
      backgroundAudio[5].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[4].audio.pause();
    }, 3000);
    }else if(question==="You Watch"){
      setTimeout(() => {
      dispatch(updatePage("Admission"))
    }, 1000);
    }else if(question==="While the weaver made some good points, the weaver is still enough in the wrong to warrant further investigation and maybe a trial, you arrest the weaver."){
      backgroundAudio[5].audio.fade(1,0,3000);
      dispatch(updateHalo(7));
      setTimeout(() => {
      dispatch(updatePage("EndingOne"))
      backgroundAudio[5].audio.pause();
      backgroundAudio[6].audio.play();
      backgroundAudio[6].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[5].audio.pause();
    }, 3000);
    }else if(question==="The weaver seems genuine and made some good points, this doesn’t feel quite right to you, you let the weaver go"){
      backgroundAudio[5].audio.fade(1,0,3000);
      dispatch(updateHalo(7));
      setTimeout(() => {
      dispatch(updatePage("EndingTwo"))
      backgroundAudio[5].audio.pause();
      backgroundAudio[6].audio.play();
      backgroundAudio[6].audio.fade(0,1,2000);
    }, 1000);
    setTimeout(() => {
      backgroundAudio[5].audio.pause();
    }, 3000);
    }else if(question==="Yes, you still believe the murdered deserve justice and these investigations are worthwhile. You’ll keep investigating and will arrest others."){
      
      setTimeout(() => {
        dispatch(updatePage("EndingTwoA"))
       
      }, 1000);
    }else if(question==="No, you care about justice, but don’t want to be part of it anymore. You might not find another job as well paying as this, but you’ll take that risk. "){
      setTimeout(() => {
        dispatch(updatePage("EndingTwoB"))
       
      }, 1000);
    }else if(question==="What now?" && id===1007){
      setTimeout(() => {
        dispatch(updatePage("WhatNowOne"))
       
      }, 1000);
    }else if(question==="What now?" && id===7777){
      setTimeout(() => {
        dispatch(updatePage("WhatNowTwoA"))
       
      }, 1000);
    }else if(question==="What now?" && id===1111){
      setTimeout(() => {
        dispatch(updatePage("WhatNowTwoB"))
       
      }, 1000);
    }
    
    
    }




    
  return (

<div>

  
    <div style={{'backgroundColor':"transparent",'alignSelf':"flex-start"}as React.CSSProperties}>


        <NarratorContainer className="outlineText">{choiceData[id].text}</NarratorContainer>
        
        </div>
        <div style={{'backgroundColor':"transparent",'alignSelf':"flex-start"}as React.CSSProperties}>



        <ButtonContainer  className="choiceButton outlineText" onClick={() => redirect(choiceData[id].questionOne)}>{choiceData[id].questionOne}</ButtonContainer>
        
        </div>
        <div style={{'backgroundColor':"transparent",'alignSelf':"flex-start"}as React.CSSProperties}>
        <ButtonContainer className="choiceButton outlineText" onClick={() => redirect(choiceData[id].questionTwo)}>{choiceData[id].questionTwo}</ButtonContainer>
        
        </div>


    </div>
  )
}

export default Choice