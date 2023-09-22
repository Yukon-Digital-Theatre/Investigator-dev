import { useEffect, useState } from 'react';
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

const [audioEnded, setAudioEnded] = useState(false);



const dialogue = narratorAudio[14].audio;
const [style, setStyle] = useState(false);
const [style2, setStyle2] = useState(false);
const [style3, setStyle3] = useState(false);
const [style4, setStyle4] = useState(false);
function helperAudio(){
  setTimeout(() => {
    if(!dialoguept2.playing()){
      setStyle(true);
      dialoguept2.play()
  }
  },1000);
  
  setTimeout(() => {
      setStyle2(true);
  },14000);
  setTimeout(() => {
    setStyle3(true);
},19000);
setTimeout(() => {
  setStyle4(true);
},20500);


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
    {narratorTextMode&&<><p className='introText outlineText fadeIn'> You made your choices and ultimately you chose to let the Weaver go and quit this job.</p>
    <p className={style?'introText outlineText fadeIn':'introText inactiveText'}> Now that you’ve made your choice, your time being the investigator in this world is coming to an end. However, this world continues, time moves on, and they must live with your choice. </p></>}
    <p className={style2?'introText outlineText fadeIn':'introText inactiveText'}>
    Would you like a glimpse of what is to come in this world a year from now?
    </p>
    
    <p className={style3?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper()}>Yes</p>
    <p className={style4?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default WhatNowTwoB