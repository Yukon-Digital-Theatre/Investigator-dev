import { useDispatch, useSelector } from 'react-redux';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useEffect, useState } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updateWrapUpVisited } from '../reducers/wrapUpVisited/wrapUpVisitedSlice';


const WrapUp = () => {

  const dispatch= useDispatch();
  const wrapUpVisited = useSelector((state: any)=>state.wrapUpVisited.mode);
  const narratorTextMode = useSelector((state:any)=> state.textMode.text);
  const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
  const [style, setStyle] = useState(wrapUpVisited||!narratorMode);
  const [style2, setStyle2] = useState(wrapUpVisited||!narratorMode);
  const [style3, setStyle3] = useState(wrapUpVisited||!narratorMode);
  const [style4, setStyle4] = useState(wrapUpVisited||!narratorMode);
  const [style5, setStyle5] = useState(wrapUpVisited||!narratorMode);
const [style6, setStyle6] = useState(wrapUpVisited||!narratorMode);
const [style7, setStyle7] = useState(wrapUpVisited||!narratorMode);
const [style8, setStyle8] = useState(wrapUpVisited||!narratorMode);
const [style9, setStyle9] = useState(wrapUpVisited||!narratorMode);



  function helper(): void {
    window.open('https://yukondigitaltheatrecollective.com/');
  }
  function helper2(): void {
    dispatch(updatePage("Credits"));
  }
  
  function helper3(): void {
    dispatch(updatePage("WorldBackground"));
  }
  function helper4(): void {

    Howler.stop();
    dispatch(updateWrapUpVisited(false))
    dispatch(updatePage("Intro"));
    
  }
  function helper5(): void {

    window.open('https://www.zeffy.com/en-CA/donation-form/af9b641f-c844-43ac-9e69-a489866ed83b');
  }
  function helper6(): void {

   window.open('mailto:info@youaretheinvestigator.com?subject=Investigator%20Feedback');
  }
  function helper7(): void {

    dispatch(updatePage("MoreAboutArtists"));
  }

  const dialogue = narratorAudio[21].audio;

  useEffect(() => {
    if(!wrapUpVisited){
    setTimeout(() => {
      dispatch(updateWrapUpVisited(true))
      if(!dialogue.playing()){
        narratorMode&&dialogue.play();  }
    },500);
    setTimeout(() => {
      setStyle(true);
  },18000);
    setTimeout(() => {
      setStyle2(true);
  },28000);
  setTimeout(() => {
    setStyle3(true);
},36000);
setTimeout(() => {
  setStyle4(true);
},37000);
setTimeout(() => {
  setStyle5(true);
},41000);
setTimeout(() => {
setStyle6(true);
},42000);
setTimeout(() => {
  setStyle7(true);
},55000);
setTimeout(() => {
  setStyle8(true);
},44000);
setTimeout(() => {
setStyle9(true);
},20500);
    }
    return () => {
      
    }
  }, [])
  


  return (
    <div className='wrapup_container'>
      {narratorTextMode&& <>
    <div className='wrapupText outlineText fadeIn'>How do you feel about your choices?
    As you leave this world, think of the things you are in contact with right now -  clothes, furniture, the device you are using. Do you know who made them? Where the material came from?
    </div><div className={style?'wrapupText outlineText fadeIn':'wrapupText inactiveText'}>
    When you go out into the world, please keep the outcome of this experience as confidential as possible so others may experience it fresh for themselves.
    </div> 
  
    <div className={style2?'wrapupText outlineText fadeIn':'wrapupText inactiveText'}>
    This experience has been provided free of charge, but if you’d like to support the artists and presenters follow this link to donate.
    </div> 
   
    
    <div className={style4?'wrapupText outlineText fadeIn':'wrapupText inactiveText'}>
    If you wish to share any thoughts with the artistic team click here
    </div>
    
    <div className={style6?'wrapupText outlineText fadeIn':'wrapupText inactiveText'}>
    Explore the links below to read about the artists involved, go back to the history of the world, discover more projects by the Yukon Digital Theatre Collective, or begin again. 
    </div>  </>}
    <div className={style7?'wrapupText outlineText fadeIn':'wrapupText inactiveText'}>
    This project has been created with the support of Canada Council for the Arts, @YAC Residency Program, and Yukon Government Department of Tourism and Culture.
    </div> 
    <div className={style7?'introText outlineText fadeIn':'introText inactiveText'}>
      Thank you for participating.
    </div>
<div className='flexwrapupcontainer'>
<p className={style3?'WrapUpButton introText fadeIn' :'introText inactiveText WrapUpButtonDisabled'} onClick={()=>helper5()}>Donate</p>
<p className={style5?'WrapUpButton introText fadeIn' :'introText inactiveText WrapUpButtonDisabled'} onClick={()=>helper6()}>Share your thoughts</p>
    <p className={style8?'WrapUpButton introText fadeIn' :'introText inactiveText WrapUpButtonDisabled'} onClick={()=>helper2()}>Credits</p>
    <p className={style8?'WrapUpButton introText fadeIn' :'introText inactiveText WrapUpButtonDisabled'} onClick={()=>helper7()}>More About the Artists</p>
    <p className={style8?'WrapUpButton introText fadeIn' :'introText inactiveText WrapUpButtonDisabled'} onClick={()=>helper3()}>World History</p>
    <p className={style8?'WrapUpButton introText fadeIn' :'introText inactiveText WrapUpButtonDisabled'} onClick={()=>helper()}>More YDTC Projects</p>
    <p className={style8?'WrapUpButton introText fadeIn' :'introText inactiveText WrapUpButtonDisabled'} onClick={()=>helper4()}>Back to the Beginning</p>
     
    </div>
    
    </div>
  )
}

export default WrapUp





/*<p className='Button introText' onClick={()=>helper3()}>Donate</p>
    <p className='Button introText disabled' onClick={()=>helper3()}>Contact the Creators</p>*/