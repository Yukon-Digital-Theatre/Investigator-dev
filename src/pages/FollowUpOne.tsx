import { useEffect } from 'react';
import EndingFamilyEmail from '../components/EndingFamilyEmail';
import EndingReport from '../components/EndingReport';
import { narratorAudio } from '../data/narratorAudioData';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch, useSelector } from 'react-redux';

const FollowUpOne = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    



    const narratorTextMode = useSelector((state:any)=> state.textMode.text);
    const narratorMode = useSelector((state:any)=> state.narratorAudioMode.audio);
    
    
    
    
    
    const dialogue = narratorAudio[16].audio;
    
    function helperAudio(){
      setTimeout(() => {
        if(!dialoguept2.playing()){
          dialoguept2.play()
      }
      },1000);
    }
    
    const dialoguept2 = narratorAudio[17].audio;
    
    
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
<EndingReport/>
<EndingFamilyEmail/>


    </div>}
    <p className='Button' onClick={()=>helper()}>Finish</p>
    </>
  )
}

export default FollowUpOne