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

const [style, setStyle] = useState(false);
const [style2, setStyle2] = useState(false);
const [style3, setStyle3] = useState(false);
const [style4, setStyle4] = useState(false);
const [style5, setStyle5] = useState(true);
const [style6, setStyle6] = useState(false);


useEffect(() => {
  setTimeout(() => {
    if(!dialogue.playing()){
      dialogue.play();
  }
  
  },500);
  setTimeout(() => {
    setStyle4(true);
  },9700);
  setTimeout(() => {
    setStyle(true);
  },17900);
  setTimeout(() => {
    setStyle2(true);
  },26000);
  setTimeout(() => {
    setStyle3(true);
  },36900);
  setTimeout(() => {
    setStyle5(true);
  },39300);
  setTimeout(() => {
    setStyle6(true);
  },40500);
  return () => {
  }
}, [])

  return (
    <div >
    {narratorTextMode&&<><p className='outlineText introBigText fadeIn'>
        If you exit out of the browser midway through, you will not be able to return to the same place without starting the experience over again. </p><p className={style4?'outlineText introBigText fadeIn':'introBigText inactiveText'}>
          If you selected an audio option at times you will see a pause button if you need it, although it is recommended you do not pause.</p><p className={style?'outlineText introBigText fadeIn':'introBigText inactiveText'}>
          If you selected text only you can only go forward in the experience by clicking the arrow when it appears.</p><p className={style2?'outlineText introBigText fadeIn':'introBigText inactiveText'}>
          Please ensure you are in a quiet, private, and comfortable place. Turn off notifications on any devices near you.</p></>}
<p className={style3?'outlineText introBigText fadeIn':'introBigText inactiveText'} style={{"justifyContent":"left"}} >  
Are You Ready?</p>
    <p className={style5?'introText outlineText Button fadeIn':'introText inactiveText'} onClick={()=>helper()}>Yes</p>
    <p className={style6?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helperTwo()}>No, go back to the beginning</p>
    </div>
  )
}

export default IntroQFour