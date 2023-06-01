import React, { useState, createContext, useEffect, useCallback } from 'react';
import styled  from "styled-components";
import Intro from './pages/Intro';
import '../sass/App.scss';
import GoingWithTheFlow from '../pages/GoingWithTheFlow';
import WhatNowOne from '../pages/WhatNowOne';
import DownToBusiness from '../pages/DownToBusiness';
import KeepGoing from '../pages/KeepGoing';
import MeetTheWeaver from '../pages/MeetTheWeaver';
import PreStory from '../pages/PreStory';
import StoryBackground from '../pages/StoryBackground';
import TheEmail from '../pages/TheEmail';
import MorePressure from '../pages/MorePressure';
import Admission from '../pages/Admission';
import BreakItDown from '../pages/BreakItDown';
import NewTactic from '../pages/NewTactic';
import EndingTwo from '../pages/EndingTwo';
import NarrationPrefs from './pages/NarrationPrefs';
import PageNotFound from './pages/PageNotFound';
import Desc from './pages/Desc';
import ContentWarning from './pages/ContentWarning';
import SpecificContentWarning from './pages/SpecificContentWarning';
import VoicePreferences from './pages/VoicePreferences';
import Prelude from './pages/Prelude';
import StoryIntroduction from './pages/StoryIntroduction';
import Background from './pages/Background';

import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
 import { Howl } from 'howler';

import Begin from './pages/Begin';
import { femaleAudio, maleAudio, narratorAudio, nonBinaryAudio } from '../data/backgroundAudioData';
import EndingOne from '../pages/EndingOne';

import EndingTwoB from '../pages/EndingTwoB';
import EndingTwoA from '../pages/EndingTwoA';







const Container = styled.div`
width:100%;
height:100%;
background: radial-gradient(47.8% 47.8% at 50% 50%, rgba(210, 209, 209, 0.76) 26.97%, rgba(239, 233, 233, 0.660004) 51.68%, rgba(239, 233, 233, 0.452447) 73.52%, rgba(239, 233, 233, 0.158038) 88.94%, rgba(239, 233, 233, 0) 100%);
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color:#FFFFFF;
mix-blend-mode: normal;
backdrop-filter: blur(10px);
`;




const StoryContainer = styled.div`
backdrop-filter: blur(10px);
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
width:100%;
height:100%;
`;

export const AppContext = createContext();

function App() {
  console.log(Image);
  //storing what script item will be displayed if it is mounted
  const [page,setPage] = useState(<Begin/>)
  const [invScriptNum, setInvScriptNum] = useState(0);
  const [wevScriptNum, setWevScriptNum] = useState(0);
  const [choiceScriptNum, setChoiceScriptNum] = useState (0);


  const [currentScript, setCurrentScript] = useState ("inv");
  const [currentScriptNum, setCurrentScriptNum] = useState (0);
  const [prevScript, setPrevScript] = useState("");
  const [prevScriptNum, setPrevScriptNum] = useState(0);
  const [updateFlagPrev, setUpdateFlagPrev] = useState(false);
  const [modeFlag, setModeFlag] = useState(false);
  const [voice, setVoice] = useState("female");

  

  

 const [choice, setChoice] = useState(0);

  const [playScript, setPlayScript] = useState(false);
  const [soundMode, setSoundMode] = useState(true);
  const [textMode, setTextMode] = useState(true);
  const [invMode, setInvMode] = useState(true);
  const [wevMode, setWevMode] = useState(true);
  const [voiceList, setVoiceList] = useState ([]); 
  const [narratorList, setNarratorList] = useState ([]); 
  
  async function updateScript(){
    
    await updatePrev();
    setUpdateFlagPrev(!updateFlagPrev);
  }
  
  function pageBegin(){
    setPage(<Begin/>);
  }
  function pageBackground(){
    setPage(<Background/>);
  }
  function pageContentWarning(){
    setPage(<ContentWarning/>);
  }
  function pageDesc(){
    setPage(<Desc/>);
  }

  function pageIntro(){
    setPage(<Intro/>);
  }
  function pageNarrationPrefs(){
    setPage(<NarrationPrefs/>);
  }
  function pagePrelude(){
    setPage(<Prelude/>);
  }
  function pageSpecificContentWarning(){
    setPage(<SpecificContentWarning/>);
  }
  function pageIntroduction(){
    setPage(<StoryIntroduction/>);
  }

  function pageVoicePrefs(){
    setPage(<VoicePreferences/>);
  }

  function pageMeetTheWeaver(){
    setPage(<MeetTheWeaver/>);
  }
 
  function pageGWTF(){
    setPage(<GoingWithTheFlow/>);
  }

  function pageDTB(){
    setPage(<DownToBusiness/>);
  }


  function pageKG(){
    setPage(<KeepGoing/>);
  }

  function pageNT(){
    setPage(<NewTactic/>);
  }

  function pageMP(){
    setPage(<MorePressure/>);
  }

  function pageBID(){
    setPage(<BreakItDown/>);
  }

  function pageEM(){
    setPage(<TheEmail/>);
  }
  function pageADM(){
    setPage(<Admission/>);
  }
  function pageED1(){
    setPage(<EndingOne/>);
  }
  function pageED2(){
    setPage(<EndingTwo/>);
  }
  function pageED2A(){
    setPage(<EndingTwoA/>);
  }
  function pageED2B(){
    setPage(<EndingTwoB/>);
  }
  function pageWN(){
    setPage(<WhatNowOne/>);
  }

  async function updatePrev(){
    
    setPrevScript(currentScript);
    setPrevScriptNum(currentScriptNum);
  }

  function choiceOne() {
  console.log("picked one");
  
  
  

  }

  function choiceTwo() {
  console.log("picked two");

  
  }

function audioOnly() {
    setSoundMode(true);
    setTextMode(false);

   
}
function wevFade() {
  setWevMode(!wevMode);

  
}
function invFade() {
  setInvMode(!invMode);

  
}

function textOnly() {
  setSoundMode(false);
  setTextMode(true);

  
}

function bothAudioText() {
  setSoundMode(true);
  setTextMode(true);

  
}













  

  
  

  return (
    <AppContext.Provider value={{invScriptNum, wevScriptNum, choiceScriptNum, currentScript, prevScript, currentScriptNum, prevScriptNum, soundMode, playScript, wevMode, invMode, narratorList, voiceList, invFade,wevFade,  pageBackground, pageBegin, pageContentWarning, pageDesc, pageIntro, pageNarrationPrefs, pagePrelude, pageSpecificContentWarning,  pageIntroduction, pageVoicePrefs,  audioOnly, textOnly, bothAudioText,  updateScript,  choiceOne, choiceTwo,pageMeetTheWeaver, pageGWTF, pageDTB, pageKG, pageNT, pageMP, pageBID, pageEM, pageADM, pageED1, pageED2, pageED2A,pageED2B,pageWN}}>

    
    
      <div className="App">

     
       <Container>
        <StoryContainer>
        <HashRouter>
      
      
          
          
          <Routes>

          {page==="C"}
          <Route path="/" element={page}/>



          <Route path="/*" element={<PageNotFound/>}/>
            
          </Routes>
          
         
    </HashRouter>
    </StoryContainer>
    </Container>
    </div>
  
 
    </AppContext.Provider>
    
  );
}

export default App;
