import { useEffect, useState } from 'react';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContentWarning = () => {
  const [audioEnded, setAudioEnded] = useState(false);
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("ContentWarningSpecific"));
    
    }
    
    function helperTwo(){
      narratorTextMode?dispatch(updatePage("IntroQFour")):dispatch(updatePage("IntroQThree"));
    
    }

    const dialogue = narratorAudio[3].audio;


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
{narratorTextMode&&<p className='introBigText outlineText'> The experience mentions directly and indirectly a fictional genocide which took place recently in conjunction with a war. </p>}
<p className='introBigText outlineText'>
Would you like to see more specific content warnings?
</p>

<p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText outlineText Button' onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default ContentWarning
