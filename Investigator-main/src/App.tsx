
import './sass/App.scss';
import GoingWithTheFlow from './pages/GoingWithTheFlow';
import WhatNowOne from './pages/WhatNowOne';
import DownToBusiness from './pages/DownToBusiness';
import KeepGoing from './pages/KeepGoing';
import Intro from './pages/Intro'
import MeetTheWeaver from './pages/MeetTheWeaver';

import StoryBackground from './pages/StoryBackground';
import TheEmail from './pages/TheEmail';
import MorePressure from './pages/MorePressure';
import Admission from './pages/Admission';
import BreakItDown from './pages/BreakItDown';
import NewTactic from './pages/NewTactic';
import EndingTwo from './pages/EndingTwo';
import EndingTwoB from './pages/EndingTwoB';
import EndingTwoA from './pages/EndingTwoA';

import { useSelector } from 'react-redux';
import EndingOne from './pages/EndingOne';
import PostShowFollowUp from './pages/PostShowFollowUp';
import WrapUp from './pages/WrapUp';
import IntroQOne from './pages/IntroQOne';
import ErrorPage from './pages/ErrorPage';
import IntroQTwo from './pages/IntroQTwo';
import IntroQThree from './pages/introQThree';
import ContentWarning from './pages/ContentWarning';
import ContentWarningSpecific from './pages/ContentWarningSpecific';
import IntroQFour from './pages/IntroQFour';
import IntroQFive from './pages/IntroQFive';
import AccessabilityCompatability from './pages/AccessabilityCompatability';
import Credits from './pages/Credits';
import FollowUpOne from './pages/FollowUpOne';
import FollowUpTwoA from './pages/FollowUpTwoA';
import FollowUpTwoB from './pages/FollowUpTwoB';
import TitlePage from './pages/TitlePage';
import WhatNowTwoA from './pages/WhatNowTwoA';
import WhatNowTwoB from './pages/WhatNowTwoB';
import WorldBackground from './pages/WorldBackground';
import SettingsBar from './components/SettingsBar';
import MoreAboutArtists from './pages/MoreAboutArtists';



function App() {

const haloMode = useSelector((state: any)=>state.haloMode.mode);
  const currentPage = useSelector((state: any)=>state.currentPage.page);


function displayCurrentPage(){

  if(currentPage==="Intro"){
  return <Intro/>
}else if (currentPage==="AccessabilityCompatability"){
  return <AccessabilityCompatability/>
}else if (currentPage==="IntroQOne"){
  return <IntroQOne/>
}else if (currentPage==="IntroQTwo"){
  return <IntroQTwo/>
}else if (currentPage==="IntroQThree"){
  return <IntroQThree/>
}else if (currentPage==="ContentWarning"){
  return <ContentWarning/>
}else if (currentPage==="ContentWarningSpecific"){
  return <ContentWarningSpecific/>
}else if (currentPage==="IntroQFour"){
  return <IntroQFour/>
}else if (currentPage==="IntroQFive"){
  return <IntroQFive/>
}else if (currentPage==="StoryBackground"){
  return <StoryBackground/>
}else if (currentPage==="MeetTheWeaver"){
  return <MeetTheWeaver/>
}else if (currentPage==="GoingWithTheFlow"){
  return <GoingWithTheFlow/>
}else if (currentPage==="DownToBusiness"){
  return <DownToBusiness/>
}else if (currentPage==="MorePressure"){
  return <MorePressure/>
}else if (currentPage==="KeepGoing"){
  return <KeepGoing/>
}else if (currentPage==="NewTactic"){
  return <NewTactic/>
}else if (currentPage==="BreakItDown"){
  return <BreakItDown/>
}else if (currentPage==="Admission"){
  return <Admission/>
}else if (currentPage==="EndingOne"){
  return <EndingOne/>
}else if (currentPage==="EndingTwo"){
  return <EndingTwo/>
}else if (currentPage==="EndingTwoA"){
  return <EndingTwoA/>
}else if (currentPage==="EndingTwoB"){
  return <EndingTwoB/>
}else if (currentPage==="PostShowFollowUp"){
  return <PostShowFollowUp/>
}else if (currentPage==="WhatNowOne"){
  return <WhatNowOne/>
}else if (currentPage==="WhatNowTwoA"){
  return <WhatNowTwoA/>
}else if (currentPage==="WhatNowTwoB"){
  return <WhatNowTwoB/>
}else if (currentPage==="WrapUp"){
  return <WrapUp/>
}else if (currentPage==="Credits"){
  return <Credits/>
}else if (currentPage==="FollowUpOne"){
  return <FollowUpOne/>
}else if (currentPage==="FollowUpTwoA"){
  return <FollowUpTwoA/> 
}else if (currentPage==="FollowUpTwoB"){
  return <FollowUpTwoB/>
}else if (currentPage==="TitlePage"){
  return <TitlePage/>
}
else if (currentPage==="TheEmail"){
  return <TheEmail/>
}else if (currentPage==="WorldBackground"){
  return <WorldBackground/>
}else if (currentPage==="MoreAboutArtists"){
  return <MoreAboutArtists/>
}else{
  return <ErrorPage/>
}



}


function bghalo(){
  if(haloMode===0){
    return 'BackgroundHalo'
  }else if(haloMode===1){
    return 'BackgroundHalo introhalo'
  }else if(haloMode===2){
    return 'BackgroundHalo MTWhalo'
  }else if(haloMode===3){
    return 'BackgroundHalo pmtwhalo'
  }else if(haloMode===4){
    return 'BackgroundHalo halofour'
  }else if(haloMode===5){
    return 'BackgroundHalo'
  }else if(haloMode===6){
    return 'BackgroundHalo'
  }else if(haloMode===7){
    return 'BackgroundHalo'
  }
}



function bgblur(){
  if(haloMode===0){
    return 'backdrop-filter'
  }else if(haloMode===1){
    return 'backdrop-filter'
  }else if(haloMode===2){
    return 'backdrop-filter'
  }else if(haloMode===3){
    return 'backdrop-filter filter-one'
  }else if(haloMode===4){
    return 'backdrop-filter filter-two'
  }else if(haloMode===5){
    return 'backdrop-filter filter-three'
  }else if(haloMode===6){
    return 'backdrop-filter filter-four'
  }else if(haloMode===7){
    return 'backdrop-filter filter-five'
  }
}



function haloblur(){
  if(haloMode===0){
    return 'backdrop-filter'
  }else if(haloMode===1){
    return 'backdrop-filter'
  }else if(haloMode===2){
    return 'backdrop-filter'
  }else if(haloMode===3){
    return 'backdrop-filter filter-one'
  }else if(haloMode===4){
    return 'backdrop-filter filter-two'
  }else if(haloMode===5){
    return 'backdrop-filter filter-three'
  }else if(haloMode===6){
    return 'backdrop-filter filter-four'
  }else if(haloMode===7){
    return 'backdrop-filter filter-five'
  }
}






  return (
   
    <div className="App">
       <div className={bgblur()}>  
        <div className={bghalo()}>
        <div className={bgblur()}>   
        <SettingsBar/>
  
       
         {displayCurrentPage()}
          
          </div>
       
            </div>
        </div>
       
    </div>

  );
}

export default App;
