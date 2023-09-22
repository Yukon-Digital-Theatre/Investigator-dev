
import styled, { css }  from "styled-components";
import { textItem } from "../types";
import { backgroundAudio } from "../data/backgroundAudioData";
import { useDispatch } from "react-redux";
import { updatePage } from "../reducers/currentPage/currentPageSlice";
import { updateHalo } from "../reducers/haloMode/haloModeSlice";



const WeaverContainer = styled.div<{ leaving: boolean }>`
font-family: 'Noto Serif', serif;
font-size: 1.2vw;
font-weight: 1000;
line-height: 3.22581vh;
color: #000000;
letter-spacing: 0.05em;
width:45vw;
padding:1vh;
padding-top:0.5vh;
padding-bottom:3vh;
background-color:transparent;
animation-name: fade-in;
animation-fill-mode:forwards;
animation-duration:1s;
text-align: left;
${ props => props.leaving && css`
    animation-name:fade-out;
  `};

`;
const WeaverBridgeContainer = styled.div<{ leaving: boolean }>`
font-family: 'Noto Serif', serif;
color: #000000;
font-size: 1.2vw;
font-weight: 1000;
line-height: 3.22581vh;
letter-spacing: 0.05em;
width:45vw;
padding:1vh;
padding-top:0.5vh;
padding-bottom:0.5vh;
background-color:transparent;
animation-name: fade-in;
animation-fill-mode:forwards;
animation-duration:1s;
text-align: left;
${ props => props.leaving && css`
    animation-name:fade-out;
  `};

`;

const InvestigatorContainer = styled.div<{ leaving: boolean }>`
display:flex;
justify-content:flex-end;
text-align:justify;
padding:1vh;
padding-bottom:3vh;
width:45vw;
font-family: 'Sofia Sans', sans-serif;
font-size: 1.45833vw;
flex-shrink:1;
font-weight: 700;
line-height: 3.53798vh;
letter-spacing: 0.25em;
background-color:transparent;
animation-name: fade-in;
animation-fill-mode:forwards;
animation-duration:1s;
${ props => props.leaving && css`
    animation-name:fade-out;
  `};
`;

const InvestigatorBridgeContainer = styled.div<{ leaving: boolean }>`
display:flex;
justify-content:flex-end;
text-align:justify;
padding:1vh;
padding-bottom:1vh;
width:45vw;
font-family: 'Sofia Sans', sans-serif;
font-size: 1.45833vw;
flex-shrink:1;
font-weight: 700;
line-height: 3.53798vh;
letter-spacing: 0.25em;
background-color:transparent;
animation-name: fade-in;
animation-fill-mode:forwards;
animation-duration:1s;
${ props => props.leaving && css`
    animation-name:fade-out;
  `};
`;

const NarratorContainer = styled.div<{ leaving: boolean }>`
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
${ props => props.leaving && css`
    animation-name:fade-out;
  `};
`;

const ButtonContainer = styled.div<{ leaving: boolean }>`
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
${ props => props.leaving && css`
    animation-name:fade-out;
  `};
`;





interface props {
  item:textItem;
  leaving:boolean;
 }


const StoryText = ({item, leaving}:props) => {


const dispatch = useDispatch();

  function redirect(){
    if(item.text==="Go along with it, you might learn more "){
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
    }else if(item.text==="Clarify why you are really here, you don’t have all day "){
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
    }else if(item.text==="Continue"&&item.id===121){
      setTimeout(() => {
      dispatch(updatePage("DownToBusiness"))
    }, 1000);
    }else if(item.text==="Yes, you don’t want the weaver to shut down. Keep asking simple questions."){
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
    }else if(item.text==="No, it’s time to ask harder questions, you’ll risk the weaver shutting down."){
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
    }else if(item.text==="Continue"&&item.id===23){
      setTimeout(() => {
      dispatch(updatePage("NewTactic"))
    }, 1000);
    }else if(item.text==="No, the weaver must have known, you’ll need to apply more pressure to get the truth, to get a confession."){
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
    }else if(item.text==="Yes, you believe the weaver really doesn’t know and you’ll have to break it down to make the weaver realize so that more questions can be answered"){
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
    }else if(item.text==="Continue"&&item.id===25){
      setTimeout(() => {
      dispatch(updatePage("BreakItDown"))
    }, 1000);
    }else if(item.text==="Yes, it might be important "){
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
    }else if(item.text==="No, if it was that important it would be a phone call "){
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
  }else if(item.text==="Continue"&&item.id===4){
      setTimeout(() => {
      dispatch(updatePage("Admission"))
    }, 1000);
    }else if(item.text==="While the weaver made some good points, the weaver is still enough in the wrong to warrant further investigation and maybe a trial, you arrest the weaver."){
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
    }else if(item.text==="The weaver seems genuine and made some good points, this doesn’t feel quite right to you, you let the weaver go"){
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
    }else if(item.text==="Yes, you still believe the murdered deserve justice and these investigations are worthwhile. You’ll keep investigating and will arrest others."){
      
      setTimeout(() => {
        dispatch(updatePage("EndingTwoA"))
       
      }, 1000);
    }else if(item.text==="No, you care about justice, but don’t want to be part of it anymore. You might not find another job as well paying as this, but you’ll take that risk. "){
      setTimeout(() => {
        dispatch(updatePage("EndingTwoB"))
       
      }, 1000);
    }else if(item.text==="What now?" && item.id===1007){
      setTimeout(() => {
        dispatch(updatePage("WhatNowOne"))
       
      }, 1000);
    }else if(item.text==="What now?" && item.id===7777){
      setTimeout(() => {
        dispatch(updatePage("WhatNowTwoA"))
       
      }, 1000);
    }else if(item.text==="What now?" && item.id===1111){
      setTimeout(() => {
        dispatch(updatePage("WhatNowTwoB"))
       
      }, 1000);
    }
    
    
    }
    
  return (
   <>
   {item.speaker === "narrator"?(
    <NarratorContainer leaving={leaving} className="outlineText">{item.text}</NarratorContainer>
    
    
    
    ):item.speaker === "investigator"?(
      <div style={{'backgroundColor':"transparent",'alignSelf':"flex-end", 'alignContent':"right"}as React.CSSProperties}>
    <InvestigatorContainer leaving={leaving} className="outlineText">{item.text}</InvestigatorContainer>
    </div>
    
 
    ):item.speaker === "investigatorbridge"?(
      <div style={{'backgroundColor':"transparent",'alignSelf':"flex-end", 'alignContent':"right"}as React.CSSProperties}>
    <InvestigatorBridgeContainer leaving={leaving} className="outlineText">{item.text}</InvestigatorBridgeContainer>
    </div>
    
 
    ):item.speaker === "weaver"?(

      <div style={{'backgroundColor':"transparent",'alignSelf':"flex-start"}as React.CSSProperties}>
      <WeaverContainer leaving={leaving} className="outlineTextWhite">{item.text}</WeaverContainer>
      </div>
    
    
    
    ):item.speaker === "weaverbridge"?(

      <div style={{'backgroundColor':"transparent",'alignSelf':"flex-start"}as React.CSSProperties}>
      <WeaverBridgeContainer leaving={leaving} className="outlineTextWhite">{item.text}</WeaverBridgeContainer>
      </div>
    
    
    
    ):item.text === "Continue"?(

      <WeaverContainer leaving={leaving} onAnimationEnd={() => redirect()}></WeaverContainer>
    
    
    
    ):(
     
          <div style={{'backgroundColor':"transparent",'alignSelf':"flex-start"}as React.CSSProperties}>
        <ButtonContainer leaving = {false} className="choiceButton outlineText" onClick={() => redirect()}>{item.text}</ButtonContainer>
        
        </div>

    )
    }
    </>
  )
}

export default StoryText