import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';
import { narratorAudio } from '../data/narratorAudioData';
import { useEffect } from 'react';

const IntroQFive = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("StoryBackground"));

}

function helperTwo(){
  dispatch(updateHalo(2));
  setTimeout(() => {
    dispatch(updatePage("MeetTheWeaver"));
  }, 1000);
    

}

const dialogue = narratorAudio[7].audio;

const narratorTextMode = useSelector((state:any)=> state.textMode.text);
const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);

useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      narratorMode&&dialogue.play();  }
  },500);

  return () => {
    
  }
}, [])


  return (
    <div>
    {narratorTextMode&&<p className='outlineText introBigText'>This is a world out of time and place. It is similar to our own.
	However, this country, in this world, is recovering from a war stretching over several years.
	    The war ended only six weeks ago.</p>}


    <p className='outlineText introBigText'>Would you like to learn more about the history of this world before continuing?</p>
    <p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText outlineText Button' onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default IntroQFive
