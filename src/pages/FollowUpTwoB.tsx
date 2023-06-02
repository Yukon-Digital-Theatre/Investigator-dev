import { useEffect } from 'react';
import EndingLetter from '../components/EndingLetter';
import EndingNewsPaper from '../components/EndingNewsPaper';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const FollowUpTwoB = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    
    const narratorTextMode = useSelector((state:any)=> state.textMode.text);
    const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
    
    
    
    
    
    const dialogue = narratorAudio[19].audio;
    
    function helperAudio(){
      setTimeout(() => {
        if(!dialoguept2.playing()){
          dialoguept2.play()
      }
      },1000);
    }
    
    const dialoguept2 = narratorAudio[20].audio;
    
    
    dialogue.on('end', ()=>helperAudio());
    
    useEffect(() => {
      setTimeout(() => {
        if(!dialogue.playing()){
        narratorMode&&dialogue.play();
      }
      },1000);
     
    
      return () => {
        
      }
    }, [])




  return (
    <>
    {narratorTextMode&&<div className='lettercontainer'>
<EndingLetter/>
<EndingNewsPaper/>
</div>}
<p className='Button' onClick={()=>helper()}>Yes</p>
    </>
  )
}

export default FollowUpTwoB