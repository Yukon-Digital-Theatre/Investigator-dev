import { useEffect, useState } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContentWarningSpecific = () => {
    
  const [audioEnded, setAudioEnded] = useState(false);
    const dispatch= useDispatch();
    const [style, setStyle] = useState(false);
    const [style2, setStyle2] = useState(false);
    const [style3, setStyle3] = useState(false);
    function helper(){
      !narratorMode?dispatch(updatePage("IntroQFour")):dispatch(updatePage("IntroQThree"));
    
    }
    const dialogue = narratorAudio[4].audio;

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
      },20500);
      setTimeout(() => {
        setStyle2(true);
      },24000);
      setTimeout(() => {
        setStyle3(true);
      },28000);
      return () => {
        
      }
    }, [])
    

  return (
    <div>

{narratorTextMode&&<p className='introBigText outlineText fadeIn'> Allusions and discussion of the hair of murder victims being used in the carpets the weaver is weaving. Brief references to mass killings, war, sexual assault, enslaved children, relocation, deportation, starvation, assaults. </p> }
<p className={style?'introBigText outlineText fadeIn':'introBigText inactiveText'}> If you want to continue with this experience, click continue.</p> <p className={style2?'introBigText outlineText fadeIn':'introBigText inactiveText'}>If you do not want to continue with this experience close your browser. </p>
<p className={style3?'introText Button outlineText fadeIn':'introText inactiveText'} onClick={()=>helper()}>Continue</p>
    </div>
  )
}

export default ContentWarningSpecific
