import { updateInvAudioDelivery } from '../reducers/invAudioDeliveryMode/invAudioDeliveryModeSlice';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateTextDelivery } from '../reducers/textDeliveryMode/textDeliveryModeSlice';
import { useEffect, useState } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updateVoicePreference } from '../reducers/voicePreference/voicePreferenceSlice';
import { femaleAudio, maleAudio, nonBinaryAudio } from '../data/characterAudioData';
import { backgroundAudio } from '../data/backgroundAudioData';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';

const IntroQThree = () => {



  const [modePicked, setModePicked] = useState(false)
  const [voicePicked, setVoicePicked] = useState(false)



    const dispatch= useDispatch();
   

function helper(){
  dispatch(updateInvAudioDelivery(true));
  setModePicked(true);


}

function helper2(){
  dispatch(updateInvAudioDelivery(false));


  setModePicked(true);

}

function helper3(){
  dispatch(updateInvAudioDelivery(true));


  setModePicked(true);

}

function helper4(){
  dispatch(updateVoicePreference("female"))
setVoicePicked(true)
{femaleAudio.map((item) => { item.audio.load()})}
}

function helper5(){
  dispatch(updateVoicePreference("male"))
  setVoicePicked(true)
  {maleAudio.map((item) => { item.audio.load()})}
}

function helper6(){
  dispatch(updateVoicePreference("nonbinary"))
  setVoicePicked(true)
  {nonBinaryAudio.map((item) => { item.audio.load()})}
}
const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
const narratorTextMode = useSelector((state:any)=> state.textMode.audio);
const [audioEnded, setAudioEnded] = useState(false);
useEffect(() => {
  


  if(voicePicked){
 
    dispatch(updatePage("NewTactic"))
   
  }


  return () => {
    
  }
}, [modePicked, voicePicked])

const dialogue = narratorAudio[5].audio;
const [style, setStyle] = useState(false);
const [style2, setStyle2] = useState(false);
const [style3, setStyle3] = useState(false);

useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      dialogue.seek(12);
      narratorMode&&dialogue.play();
      narratorTextMode&&setStyle3(true);
  }
  },500);
  setTimeout(() => {
    setStyle(true);
  },3500);
  setTimeout(() => {
    setStyle2(true);
  },5500);
  setTimeout(() => {
    setStyle3(true);
  },7000);
  return () => {
    
  }
}, [])




  return (
    <div>
      

    <p className='outlineText introBigText fadeIn' style={{"justifyContent":"left"}} >Would you like your character's voice to be</p >
    <p className={style?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper4()}>Female</p>
    <p className={style2?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper5()}>Male</p>
    <p className={style3?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper6()}>Non Binary</p>

    </div>
  )
}

export default IntroQThree




//<p className='outlineText introBigText'>What features would you like for the characters for this experience</p>
//<p className='introText Button outlineText disabled' onClick={()=>helper2()}>Audio Only</p>
//<p className='introText Button outlineText' onClick={()=>helper()}>Text Only</p>
//<p className='introText Button outlineText disabled' onClick={()=>helper3()}>Both Audio and Text</p>
