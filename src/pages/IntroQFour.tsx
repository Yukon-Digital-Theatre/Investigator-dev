import { useEffect, useState } from 'react';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { narratorAudio } from '../data/narratorAudioData';

const IntroQFour = () => {
    const dispatch= useDispatch();
    const [audioEnded, setAudioEnded] = useState(false);
function helper(){
    dispatch(updatePage("IntroQFive"));

}

function helperTwo(){
    dispatch(updatePage("Intro"));

}

const dialogue = narratorAudio[6].audio;


const narratorTextMode = useSelector((state:any)=> state.textMode.text);
const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
const invTextMode = useSelector((state:any)=> state.invTextMode.text);
const invMode = useSelector((state:any)=> state.invAudioMode.audio);
const voicePref = useSelector((state:any)=> state.voicePref.voice);

useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      narratorMode&&dialogue.play(); 
  }
  },500);

  return () => {
    
  }
}, [])
  return (
    <div >
    {narratorTextMode&&<p className='outlineText introBigText'>     You may change your delivery preference by clicking the gear icon at any time.

If you exit out of the browser midway through, you will not be able to return to the same place without starting the experience over again. 

If you selected an audio option at times you will see a pause button and a back button if you need it, although it is recommended you do not pause or go back.

You will be limited in how far back you can go.

If you selected text only you can only go forward in the experience by clicking the arrow when it appears.

Please ensure you are in a quiet, private, and comfortable place. Turn off notifications on any devices near you.</p>}
<p className='outlineText introBigText ' style={{"justifyContent":"left"}} >  
Are You Ready?</p>
    <p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText Button outlineText' onClick={()=>helperTwo()}>No, go back to the beginning</p>
    </div>
  )
}

export default IntroQFour