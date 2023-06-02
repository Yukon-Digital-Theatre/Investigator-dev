import { useEffect } from 'react';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';
import { narratorAudio } from '../data/narratorAudioData';
import { useSelector } from 'react-redux';

const IntroQTwo = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("ContentWarning"));

}

function helperTwo(){
    dispatch(updatePage("IntroQThree"));

}




const narratorTextMode = useSelector((state:any)=> state.textMode.text);
const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
const invTextMode = useSelector((state:any)=> state.invTextMode.text);
const invMode = useSelector((state:any)=> state.invAudioMode.audio);
const voicePref = useSelector((state:any)=> state.voicePref.voice);



const dialogue = narratorAudio[2].audio;


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
    <div>
    {narratorTextMode&&<p className='outlineText introBigText'> Welcome to The Investigator, an interactive digital storytelling experience. 

This story is set out of time and place, in a world similar to our own, but not ours. 

You will be taking on the role of an investigator who has been sent to question a weaver. 

This experience will take about 40 to 60 minutes, depending on the choices you make. 

It is recommended you find a private, quiet, and comfortable place to get the most from this experience.

You may turn the ambiance soundtrack off or on via the sound button at any time.

</p>}<p className='outlineText introBigText'>Before you continue, would you like general content warnings?</p>
    <p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText outlineText Button' onClick={()=>helperTwo()}>No</p>




    
    </div>
  )
}

export default IntroQTwo