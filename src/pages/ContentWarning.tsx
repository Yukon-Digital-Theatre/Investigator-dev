import { useEffect, useState } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContentWarning = () => {
  const [audioEnded, setAudioEnded] = useState(false);
  const [style, setStyle] = useState(false);
  const [style2, setStyle2] = useState(false);
  const [style3, setStyle3] = useState(false);
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("ContentWarningSpecific"));
    
    }
    
    function helperTwo(){
      !narratorMode?dispatch(updatePage("IntroQFour")):dispatch(updatePage("IntroQThree"));
    
    }

    const dialogue = narratorAudio[3].audio;


    const narratorTextMode = useSelector((state:any)=> state.textMode.text);
    const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);

useEffect(() => {
  setStyle(!narratorMode);
  setStyle2(!narratorMode);
  setStyle3(!narratorMode);
  setTimeout(() => {
    if(!dialogue.playing()){
      narratorMode&&dialogue.play();
  }
  },500);
  setTimeout(() => {
    setStyle(true);
  },9000);
  setTimeout(() => {
    setStyle2(true);
  },13000);
  setTimeout(() => {
    setStyle3(true);
  },14000);
  return () => {
    
  }
}, [])

  return (
    <div>
{narratorTextMode&&<p className={'introBigText outlineText fadeIn'}> The experience mentions directly and indirectly a fictional genocide which took place recently in conjunction with a war. </p>}
<p className={style?'introBigText outlineText fadeIn':'introBigText inactiveText'}>
Would you like to see more specific content warnings?
</p>

<p className={style2?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper()}>Yes</p>
    <p className={style3?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default ContentWarning
