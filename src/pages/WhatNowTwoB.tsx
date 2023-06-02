import { useEffect } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const WhatNowTwoB = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("FollowUpTwoB"));

}

function helperTwo(){
    dispatch(updatePage("WrapUp"));

}





const narratorTextMode = useSelector((state:any)=> state.textMode.text);
const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);





const dialogue = narratorAudio[14].audio;

function helperAudio(){
  setTimeout(() => {
    if(!dialoguept2.playing()){
      dialoguept2.play()
  }
  },1000);
}

const dialoguept2 = narratorAudio[15].audio;


dialogue.on('end', ()=>helperAudio());

useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
    narratorMode&&dialogue.play();
  }
  },1000);
 

  return () => {
    
  }
}, [])
  return (
    <div>
    {narratorTextMode&&<><p className='introText outlineText'> You made your choices and ultimately you chose to let the Weaver go and quit this job.</p><p className='introText outlineText'> Now that you’ve made your choice, your time being the investigator in this world is coming to an end. However, this world continues, time moves on, and they must live with your choice. </p></>}
    <p className='introText outlineText introText outlineText'>
    Would you like a glimpse of what is to come in this world a year from now?
    </p>
   
    <p className='Button introText outlineText' onClick={()=>helper()}>Yes</p>
    <p className='Button introText outlineText' onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default WhatNowTwoB