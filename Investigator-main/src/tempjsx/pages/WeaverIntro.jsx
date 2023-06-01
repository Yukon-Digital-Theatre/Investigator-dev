import React, { useState, useEffect, useContext, useCallback } from 'react'
import { wevData, invData, choiceData } from '../Data';
import { AppContext } from '../App';
import styled  from "styled-components";
import Choice from "../components/Choice";
import Navbar from "../components/Navbar";
import SettingsBar from "../components/SettingsBar";
import StoryText from "../components/StoryText";
import ChoiceText from '../components/ChoiceText';
import { useNavigate } from 'react-router-dom'
import { soundData } from '../Data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content:space-between;
  height:100vh;
`;

const StoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  flex:10;
`;

const TextContainer = styled.div`
display:flex;
background-color:transparent;
flex:7;
flex-direction:column;
justify-content:space-around;
padding:1%;
`;

const Button = styled.div`
background-color:green;
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
const WeaverIntro = () => {


const {pageStory, voiceList, soundMode, voice, start, stop, list, modeFlag} = useContext(AppContext);

const background = list.find((item, index)=>{
  console.log(index);
  return(index == 4);
})
   const navigate = useNavigate();
   var audio=null;

if (soundMode){
   audio = voiceList.find((item, index)=>{
    console.log(index);
    return(index == 0);
  })
}

  const [styles, setStyles] = useState({'animation':"fadeIn 1s"});
  const [stylesOne, setStylesOne] = useState({'opacity':"0"});
  const [stylesTwo, setStylesTwo] = useState({'opacity':"0"});
  const [stylesThree, setStylesThree] = useState({'opacity':"0"});
  const [stylesFour, setStylesFour] = useState({'opacity':"1"});
  const [stylesFive, setStylesFive] = useState({'opacity':"0"});
  const [stylesSix, setStylesSix] = useState({'opacity':"0"});
 
    useEffect(() => {
      if(!background.playing()){
        background.play()
      }
      
      background.loop(true);
      background.fade(0,1,1000);
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
    
      setTimeout(() => {
      pageStory();
        
      }, 152000)

   
      
    }, [navigate])



    











// Stop the audio and gradually decrease its volume to 0



  

  
  


    return (
      <Container style={styles}>
        <SettingsBar></SettingsBar>
        <StoryContainer>
<TextContainer style={styles}>
    <div>You recently came to the city in search of your next job. You are very short on money.</div>
    <div style={stylesTwo}>Before the end of the war you were working at a hospital near the fighting, they needed the extra help.</div>
    <div style={stylesThree}>Since they don’t anymore you have been working odd jobs, trying to find ones that help your country and its citizens recover when you can.</div>
    <div style={stylesFour}>After 9 days of searching in the city, you were offered this job, as an investigator.</div>
    <div style={stylesFive}>You know you are lucky to have it. It pays well.</div>
    <div style={stylesSix}>Going to work this morning you passed many people not so lucky.</div>
    <div style={styles}> Today is your first day.</div>
    <div style={styles}>It has gone well so far.</div>
    <div style={styles}>After a quick orientation this morning and early afternoon, you have been sent to this address in the south end of the city. </div>
    <div style={styles}>The investigation has just begun, you need to get as much information as you can.</div>
    <div style={styles}>It is cold and cloudy, but thankfully it hasn’t rained.</div>
    <div style={styles}>This area is filled with older buildings, many not kept up, including this one, the workshop of the weaver.</div>
    <div style={styles}>You go down a dark, narrow hallway. You see the unit number sent to you in your assignment email.</div>
    <div style={styles}>You take out your phone and double check this is the right unit.</div>
    <div style={styles}>It is.</div>
    <div style={styles} >You put your phone away and steady your nerves, fiddling with your watch for a moment. </div>
    <div style={styles}>An expensive gift you bought for yourself on your first visit to this city, the Capital, years before the war. You miss that time.</div>
    <div style={styles}>But there will be good times again. Rebuilding and healing has started. This investigation is part of it.</div>
    <div style={styles}>You open the door.</div>
  
    <div style={styles}>The weaver is at their loom working on a small carpet square. The yarn has various dark and grey shades in it. </div>
    <div style={styles}>There are piles of small carpet squares around the room. No more than one foot square each. Spools of yarn, boxes, some tables, and various weaving tools. </div>
    <div style={styles}>A larger loom off to the side, the weaver works on a smaller loom in the middle of the room.</div>
    <div style={styles}>Mask over the weaver’s mouth. Working quickly, mechanically. </div>
    <div style={styles}>You go unnoticed. You say:</div>
    </TextContainer>
    </StoryContainer>
  <Navbar></Navbar>
    </Container>
  )
}

export default WeaverIntro