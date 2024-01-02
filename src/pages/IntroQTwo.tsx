import { useEffect, useState } from 'react';
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
    !narratorMode?dispatch(updatePage("IntroQFour")):dispatch(updatePage("IntroQThree"));

}

const [audioEnded, setAudioEnded] = useState(false);


const narratorTextMode = useSelector((state:any)=> state.textMode.text);
const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
const invTextMode = useSelector((state:any)=> state.invTextMode.text);
const invMode = useSelector((state:any)=> state.invAudioMode.audio);
const voicePref = useSelector((state:any)=> state.voicePref.voice);

const [style, setStyle] = useState(!narratorMode);
const [style2, setStyle2] = useState(!narratorMode);
const [style3, setStyle3] = useState(!narratorMode);
const [style4, setStyle4] = useState(!narratorMode);
const [style5, setStyle5] = useState(!narratorMode);
const [style6, setStyle6] = useState(!narratorMode);
const dialogue = narratorAudio[2].audio;


useEffect(() => {
              
  setTimeout(() => {
   
    if(!dialogue.playing()){
      narratorMode&&dialogue.play();
     
  }
  },500);
  setTimeout(() => {
    setStyle4(true);
  },5500);
  setTimeout(() => {
    setStyle5(true);
  },19500);
  setTimeout(() => {
    setStyle(true);
  },40500);
  setTimeout(() => {
    setStyle2(true);
  },45000);
  setTimeout(() => {
    setStyle3(true);
  },46000);
  return () => {
    
  }
}, [])


  return (
    <div>
    {narratorTextMode&&<><p className='outlineText introBigText fadeIn' style={{"justifyContent":"left"}}>Welcome to The Investigator, an interactive digital storytelling experience. 
    </p><p className={style4?'outlineText introBigText fadeIn':'introBigText inactiveText'} style={{"justifyContent":"left"}}>
This story is set out of time and place, in a world similar to our own, but not ours. 

You will be taking on the role of an investigator who has been sent to question a weaver. 
</p><p className={style5?'outlineText introBigText fadeIn':'introBigText inactiveText'} style={{"justifyContent":"left"}}>
This experience will take about 40 to 60 minutes, depending on the choices you make. 

It is recommended you find a private, quiet, and comfortable place to get the most from this experience.
You may turn the ambiance soundtrack off or on via the sound button at any time.

</p></>}<p className={style?'introBigText outlineText fadeIn':'introBigText inactiveText'}>Before you continue, would you like general content warnings?</p>
    <p className={style2?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper()}>Yes</p>
    <p className={style3?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helperTwo()}>No</p>




    
    </div>
  )
}

export default IntroQTwo