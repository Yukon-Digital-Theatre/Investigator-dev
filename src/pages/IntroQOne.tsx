import { useEffect, useState } from 'react';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';
import { narratorAudio } from '../data/narratorAudioData';
import { updateTextDelivery } from '../reducers/textDeliveryMode/textDeliveryModeSlice';
import { updateNarratorAudioDelivery } from '../reducers/narratorAudioDeliveryMode/narratorAudioDeliveryModeSlice';



const IntroQOne = () => {
    const dispatch= useDispatch();

function helper(){
  dispatch(updateNarratorAudioDelivery(true));
  dispatch(updateTextDelivery(false));
    dispatch(updatePage("WrapUp"));

}

function helper2(){
  dispatch(updateNarratorAudioDelivery(false));
  dispatch(updateTextDelivery(true));
  dispatch(updatePage("WrapUp"));

}

function helper3(){
 dispatch(updateNarratorAudioDelivery(true));
 dispatch(updateTextDelivery(true));
 dispatch(updatePage("WrapUp"));

}
const dialogue = narratorAudio[1].audio;
const [style, setStyle] = useState(false);
const [style2, setStyle2] = useState(false);
const [style3, setStyle3] = useState(false);
const [style4, setStyle4] = useState(false);

useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      dialogue.play();
  }
  
  },2000);
  setTimeout(() => {
    setStyle4(true);
  },4700);
  setTimeout(() => {
    setStyle(true);
  },9700);
  setTimeout(() => {
    setStyle2(true);
  },11000);
  setTimeout(() => {
    setStyle3(true);
  },13000);
  return () => {
  }
}, [])



  return (
    <div>
     
     
    <h1 className ='outlineText introBigText fadeIn'> To begin the experience, please select your preference.
    </h1>
    <h1 className ={style4?'outlineText introBigText fadeIn':'introBigText inactiveText'}>You may change your delivery preference by clicking the gear icon at any time.</h1>
    <p className={style?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper()}>Audio Only</p>
    <p className={style2?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper2()}>Text Only</p>
    <p className={style3?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper3()}>Both Audio and Text</p>
    </div>
  )
}

export default IntroQOne