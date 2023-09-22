import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { updateHalo } from '../reducers/haloMode/haloModeSlice';
import { narratorAudio } from '../data/narratorAudioData';
import { useEffect, useState } from 'react';

const IntroQFive = () => {
    const dispatch= useDispatch();
    const [audioEnded, setAudioEnded] = useState(false);
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
const [style, setStyle] = useState(false);
const [style2, setStyle2] = useState(true);
const [style3, setStyle3] = useState(true);
useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      dialogue.play();
  }
  
  },500);
 
  setTimeout(() => {
    setStyle(true);
  },17000);
  setTimeout(() => {
    setStyle2(true);
  },22000);
  setTimeout(() => {
    setStyle3(true);
  },23700);
  return () => {
  }
}, [])


  return (
    <div>
    {narratorTextMode&&<p className='fadeIn outlineText introBigText'>This is a world out of time and place. It is similar to our own.
	However, this country, in this world, is recovering from a war stretching over several years.
	    The war ended only six weeks ago.</p>}


    <p className={style?'outlineText introBigText fadeIn':'introBigText inactiveText'}>Would you like to read more about the history of this world before continuing?</p>
    <p className={style2?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper()}>Yes</p>
    <p className={style3?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default IntroQFive
