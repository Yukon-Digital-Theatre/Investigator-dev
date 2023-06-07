import { updateInvAudioDelivery } from '../reducers/invAudioDeliveryMode/invAudioDeliveryModeSlice';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateTextDelivery } from '../reducers/textDeliveryMode/textDeliveryModeSlice';
import { useEffect, useState } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updateVoicePreference } from '../reducers/voicePreference/voicePreferenceSlice';

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
}

function helper5(){
  dispatch(updateVoicePreference("male"))
  setVoicePicked(true)
}

function helper6(){
  dispatch(updateVoicePreference("nonbinary"))
  setVoicePicked(true)
}
const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
const [audioEnded, setAudioEnded] = useState(false);
useEffect(() => {
  


  if(voicePicked){
    dispatch(updatePage("IntroQFour"));
  }


  return () => {
    
  }
}, [modePicked,voicePicked])

const dialogue = narratorAudio[5].audio;


useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      dialogue.seek(12);
      narratorMode&&dialogue.play();
  }
  },500);

  return () => {
    
  }
}, [])




  return (
    <div>
      

    <p className='outlineText introBigText' style={{"justifyContent":"left"}} >Would you like your character's voice to be</p >
    <p className='introText Button outlineText disabled' onClick={()=>helper4()}>Female</p>
    <p className='introText Button outlineText' onClick={()=>helper5()}>Male</p>
    <p className='introText Button outlineText disabled' onClick={()=>helper6()}>Non Binary</p>

    </div>
  )
}

export default IntroQThree




//<p className='outlineText introBigText'>What features would you like for the characters for this experience</p>
//<p className='introText Button outlineText disabled' onClick={()=>helper2()}>Audio Only</p>
//<p className='introText Button outlineText' onClick={()=>helper()}>Text Only</p>
//<p className='introText Button outlineText disabled' onClick={()=>helper3()}>Both Audio and Text</p>
