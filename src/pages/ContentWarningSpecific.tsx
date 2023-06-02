import { useEffect } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContentWarningSpecific = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("IntroQThree"));
    
    }
    const dialogue = narratorAudio[4].audio;

    const narratorTextMode = useSelector((state:any)=> state.textMode.text);
    const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);

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

{narratorTextMode&&<p className='introBigText outlineText'> Allusions and discussion of the hair of murder victims being used in the carpets the weaver is weaving. Brief references to mass killings, war, sexual assault, enslaved children, relocation, deportation, starvation, assaults. </p> }
<p className='introBigText outlineText'> If you want to continue with this experience, click continue.</p> <p className='introBigText outlineText'>If you do not want to continue with this experience close your browser. </p>
<p className=' introText outlineText Button' onClick={()=>helper()}>Continue</p>
    </div>
  )
}

export default ContentWarningSpecific
