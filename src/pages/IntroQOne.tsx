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
    dispatch(updatePage("IntroQTwo"));

}

function helper2(){
  dispatch(updateNarratorAudioDelivery(false));
  dispatch(updateTextDelivery(true));
  dispatch(updatePage("IntroQTwo"));

}

function helper3(){
 dispatch(updateNarratorAudioDelivery(true));
 dispatch(updateTextDelivery(false));
 

}
const dialogue = narratorAudio[1].audio;
const [audioEnded, setAudioEnded] = useState(false);

useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      dialogue.play();
  }
  },2000);

  return () => {
    
  }
}, [])



  return (
    <div>
     
     
    <h1 className ='outlineText introBigText'> To begin the experience, please select your preference for the narration:</h1>
    <p className='introText Button outlineText' onClick={()=>helper()}>Audio Only</p>
    <p className='introText Button outlineText' onClick={()=>helper2()}>Text Only</p>
    <p className='introText disabledButton outlineText ' onClick={()=>helper3()}>Both Audio and Text</p>
    </div>
  )
}

export default IntroQOne